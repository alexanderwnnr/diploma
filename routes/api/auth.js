const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator')
const UserSchema = require('../../models/User')
const router = Router()


// api/auth/register
router.post('/register',
            [
                check('email', 'Некорректный email').isEmail(),
                check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
            ], 
            async (req, res) => {
                try {
                    const errors = validationResult(req)

                    if(!errors.isEmpty){
                        return res.status(400).json({
                            errors: errors.array(),
                            message: 'Некорректные данные при регистрации'
                        })
                    }

                    const { name, email, password } = req.body
                    console.log(req.body)
                    const candidate = await UserSchema.findOne({ email })

                    if(candidate){
                        return res.status(400).json({ message: 'Такой пользователь уже существует' })
                    }

                    
                    // const newUser = new UserSchema({ name, email, password})
                    // bcrypt.genSalt(10, (err, salt) => {
                    //     bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //         if(err) throw err
                    //         newUser.password = hash
                    //         newUser.save()
                    //         .then(user => {
                    //             res.status(201).json({ 
                    //                 user: {
                    //                     userId: user.id,
                    //                     name: user.name,
                    //                     email: user.email
                    //             },
                    //                 message: 'Пользователь создан'
                    //          })
                    //         })
                    //     })
                    // })

                    const hashedPassword = await bcrypt.hash(password, 12)
            
                
                    const newUser = new UserSchema({ name, email, password: hashedPassword })
                    
                    await newUser.save()
                        .then(user => {
                        res.status(201).json({
                            user: { userId: user.id,
                                name: user.name,
                                email: user.email},
                            message: 'Пользователь создан' })
                        })
                    }

                    // res.status(201).json({ 
                    //     user: { id: user.id,
                    //         name: user.name,
                    //         email: user.email},
                    //     message: 'Пользователь создан' })
                    // }
            
                    catch (e) {
                        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
                    }         
})

// /api/auth/login
router.post('/login',
            [
                check('email', 'Введите корректный email').normalizeEmail().isEmail(),
                check('password', 'Введите пароль').exists()
            ],
            async (req, res) => {
                try {
                    const errors = validationResult(req)
                    
                    if (!errors.isEmpty()) {
                        return res.status(400).json({
                            errors: errors.array(),
                            message: 'Некорректные данные при входе в систему'
                        }) 
                    }

                    const {email, password} = req.body
                    console.log(req.body)
                    const user = await UserSchema.findOne({email})

                    if (!user) {
                        return res.status(400).json({ message: 'Пользователь не найден'})
                    }
                    
                    const isMatch = await bcrypt.compare(password, user.password)
                    
                    if (!isMatch) {
                        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова'})
                    }
                    const token = jwt.sign(
                        { userId: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: '1h'}
                    )
                    res.json({token, userId: user.id})
                }
                catch (e) {
                    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
                }
            })

module.exports = router
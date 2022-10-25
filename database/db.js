import {Sequelize} from 'sequelize'

const db = new Sequelize('u104921586_pruebasRescv2', 'u104921586_rescobranzas2', 'Cobranzas2022',{
    host:'sql754.main-hosting.eu',
    dialect: 'mysql'
})

export default db
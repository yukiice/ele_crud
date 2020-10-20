const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    },
    title: {
        type: String
    },
    // 这样就可以给他多个分类
    categories: [{
        // 根据id  关联Category
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
    // 攻击
    scores: {
        difficult: {
            type: Number
        },
        skills: {
            type: Number
        },
        attack: {
            type: Number
        },
        survive: {
            type: Number
        },
    },
    // 技能
    skills: [{
        icon: {
            type: String
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        tips: {
            type: String
        }
    }],
    // 顺风出装装备
    items1: [
        // 这里就会通过id管理Item
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Item'
        }
    ],
    // 逆风出装装备
    items1: [
        // 这里就会通过id管理Item
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Item'
        }
    ],
    // 铭文
    useageTips: {
        type: String
    },
    battleTips: {
        type: String
    },
    teamTips: {
        type: String
    },
    partners: [{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        // 描述
        description:{type:String},
    }]
})

module.exports = mongoose.model('Hero', schema)
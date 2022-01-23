const path = require('path')
const fs = require('fs')
const util = require('util')
const NodeEnvironment = require('jest-environment-node')
const { nanoid } = require('nanoid')
const exec = util.promisify(require('child_process').exec)

class PrismaTestEnvironment extends NodeEnvironment {}

module.exports = PrismaTestEnvironment

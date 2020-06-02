const escape = string => {
    return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d')
}

module.exports = {
    escape : escape
}
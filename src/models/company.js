const { Mongoose } = require("mongoose");

module.exports = mongoose => {
    const company = mongoose.model(
        "company",
        mongoose.Schema(
            {
                name: {
                    type: String,
                    required: true
                },
                address: {
                    type: String,
                    required: true
                },
                cuit: {
                    type: String,
                    required: true
                },
                phone: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
            },
            { timestamps: true}
        )
    )
    return company
};
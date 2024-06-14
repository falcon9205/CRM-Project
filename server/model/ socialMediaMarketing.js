import mongoose from 'mongoose';

const socialMediaMarketingSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId
    },
    department_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Department',
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    post: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now },
});

const SocialMediaMarketing = mongoose.model('SocialMediaMarketing', socialMediaMarketingSchema);

export default SocialMediaMarketing;

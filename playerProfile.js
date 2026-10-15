import mongoose from "mongoose";

const playerProfileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
            index: true
        },
        displayName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
            maxlength: 24
        },
        avatar: {
            type: String,
            default: "default_avatar.png"
        },
        equippedSkin: {
            type: String,
            default: "default_runner"
        },
        coins: {
            type: Number,
            default: 0,
            min: 0
        },
        stats: {
            totalScore: { type: Number, default: 0, min: 0 },
            totalDeaths: { type: Number, default: 0, min: 0 },
            totalEnemiesDefeated: { type: Number, default: 0, min: 0 },
            totalPlayTimeSeconds: { type: Number, default: 0, min: 0 }
        },
        unlockedItems: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ShopItem"
            }
        ],
        unlockedAchievements: [
            {
                achievement: { type: mongoose.Schema.Types.ObjectId, ref: "Achievement" },
                unlockedAt: { type: Date, default: Date.now }
            }
        ]
    },
    { timestamps: true }
);

export default mongoose.model("PlayerProfile", playerProfileSchema);
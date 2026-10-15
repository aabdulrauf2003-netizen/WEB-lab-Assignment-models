import mongoose from "mongoose";

const gameProgressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        level: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Level",
            required: true
        },
        isUnlocked: {
            type: Boolean,
            default: false
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        bestTimeMs: {
            type: Number, // Stored in milliseconds; null until completed once
            default: null,
            min: 1
        },
        highScore: {
            type: Number,
            default: 0,
            min: 0
        },
        starsEarned: {
            type: Number,
            default: 0,
            min: 0,
            max: 3
        },
        coinsCollected: {
            type: Number,
            default: 0,
            min: 0
        },
        attempts: {
            type: Number,
            default: 0,
            min: 0
        },
        deaths: {
            type: Number,
            default: 0,
            min: 0
        },
        lastCheckpoint: {
            checkpointId: { type: String, default: null },
            x: { type: Number, default: null },
            y: { type: Number, default: null }
        }
    },
    { timestamps: true }
);

// Prevent duplicate progress documents for the same user on the same level
gameProgressSchema.index({ user: 1, level: 1 }, { unique: true });

export default mongoose.model("GameProgress", gameProgressSchema);
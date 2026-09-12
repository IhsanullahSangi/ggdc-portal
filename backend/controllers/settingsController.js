import GlobalSettings from '../models/GlobalSettings.js';

// GET /api/settings (Public - Fetch for Homepage)
export const getSettings = async (req, res) => {
    try {
        let settings = await GlobalSettings.findOne();
        if (!settings) {
            settings = await GlobalSettings.create({}); // Seed default if empty
        }
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /api/settings (Protected - Update via Admin Panel)
export const updateSettings = async (req, res) => {
    try {
        const { isPopupActive, popupTitle, popupContent, enrollmentCount } = req.body;
        let settings = await GlobalSettings.findOne();

        if (!settings) {
            settings = await GlobalSettings.create({});
        }

        settings.isPopupActive = isPopupActive ?? settings.isPopupActive;
        settings.popupTitle = popupTitle || settings.popupTitle;
        settings.popupContent = popupContent || settings.popupContent;
        settings.enrollmentCount = enrollmentCount ?? settings.enrollmentCount;

        const updatedSettings = await settings.save();
        res.status(200).json(updatedSettings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
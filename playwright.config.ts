/// <reference types="node" />
import 'dotenv/config';
import { defineConfig } from '@playwright/test';



export default defineConfig({
    testDir: './tests',

    //fullyParallel: false,

    workers: process.env.CI ? 3 : 3,

    retries: process.env.CI ? 1 : 1,

    timeout: 50000,

    // reporter: [
    //     ['list'],
    //     ['html', {
    //         outputFolder: 'playwright-report',
    //         open: 'never',
    //     }],
    // ],

    use: {
        viewport: {
            width: 1900,
            height: 1050,
        },

        headless: !!process.env.CI,

        trace: 'off',
        screenshot: 'off',
        video: 'off',
    },

    projects: [
        {
            name: 'chromium',
        },
        // {
        //     name: 'firefox',
        //     use: {
        //         browserName: 'firefox',
        //     },
        // },
        
        
    ],
});
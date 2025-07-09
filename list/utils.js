const moment = require('moment-timezone');
const fs = require('fs');
const axios = require('axios');
const Jimp = require('jimp');

const utils = {
    getRandom: (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
    },

    generateRandomNumber: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    capital: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    ucapan: () => {
        const currentTime = moment().tz('Asia/Jakarta');
        const currentHour = currentTime.hour();
        let greeting;
        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Pagi Kak 🌅';
        } else if (currentHour >= 12 && currentHour < 15) {
            greeting = 'Siang Kak 🌇';
        } else if (currentHour >= 15 && currentHour < 18) {
            greeting = 'Sore Kak 🌄';
        } else {
            greeting = 'Malam Kak 🌃';
        }
        return greeting;
    },

    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    generateProfilePicture: async (buffer) => {
        const jimp = await Jimp.read(buffer);
        const min = jimp.getWidth();
        const max = jimp.getHeight();
        const cropped = jimp.crop(0, 0, min, max);
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
            preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
        };
    },

    getTime: (format, date) => {
        return date ? moment(date).locale('id').format(format) : moment.tz('Asia/Jakarta').locale('id').format(format);
    },

    getBuffer: async (url, options = {}) => {
        try {
            const res = await axios({
                method: "get",
                url,
                headers: {
                    'DNT': 1,
                    'Upgrade-Insecure-Request': 1
                },
                ...options,
                responseType: 'arraybuffer'
            });
            return res.data;
        } catch (err) {
            return err;
        }
    },

    fetchJson: async (url, options = {}) => {
        try {
            const res = await axios({
                method: 'GET',
                url,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                },
                ...options
            });
            return res.data;
        } catch (err) {
            return err;
        }
    },

    runtime: (seconds) => {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + " Hari, " : "";
        var hDisplay = h > 0 ? h + " Jam, " : "";
        var mDisplay = m > 0 ? m + " Menit, " : "";
        var sDisplay = s > 0 ? s + " Detik" : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
    },

    tanggal: (numer) => {
        const myMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum’at', 'Sabtu'];
        const tgl = new Date(numer);
        const day = tgl.getDate();
        const bulan = tgl.getMonth();
        const thisDay = myDays[tgl.getDay()];
        const yy = tgl.getYear();
        const year = (yy < 1000) ? yy + 1900 : yy;
        return `${thisDay}, ${day}/${myMonths[bulan]}/${year}`;
    },

    toRupiah: (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    },

    resize: async (image, ukur1 = 100, ukur2 = 100) => {
        return new Promise(async (resolve, reject) => {
            try {
                const read = await Jimp.read(image);
                const result = await read.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG);
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }
};

module.exports = utils;
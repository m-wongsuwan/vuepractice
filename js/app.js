const app = new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        level: 1,
        race: 'Human',
        charClass: 'Warrior',
        alignment: "Good",
        picSelect: 'feminineCaster',
        femmePic: './images/femmelock.png',
        fellaPic: './images/boylock.png',
        toughGuy: './images/toughguy.png',
        toughGal: './images/toughtgal.png',
        tinyPicturesClass: "tinyPicture",
        formLineClass: 'formLine',
        goodGlow: 'glow',

    },
    computed: {
        glowClass: function() {
            return {
                good: this.alignment === "Good",
                bad: this.alignment === "Evil"
            }
        },
        welcomeName: function() {
            if ( this.firstName ){
                return this.firstName
            } else {
                return "adventurer"
            }
        },
        fullName: function() {
            if (this.firstName && this.lastName) {
                return this.firstName + ' ' + this.lastName
            } else if (this.firstName || this.lastName) {
                return this.firstName || this.lastName
            } else {
                return "Adventurer"
            }
        },
        imgSrc: function() {
            if (this.picSelect === 'feminineCaster') {
                return this.femmePic
            } else if (this.picSelect === 'masculineCaster') {
                return this.fellaPic
            } else if (this.picSelect === 'masculineTough') {
                return this.toughGuy
            } else if (this.picSelect === 'feminineTough') {
                return this.toughGal
            }
        }

    },
    methods: {
        resetAll: function() {
            this.firstName = '';
            this.lastName = '';
            this.level = 1;
            this.picSelect = 'feminineCaster';
            this.race = 'Human';
            this.charClass = "Warrior"
        }
    }
    
})

let dadosMockados = [
    {
        id: 1,
        img: 'https://tse2.mm.bing.net/th/id/OIP.xIvEHEdOv-DvYQtGIKkMfQHaG8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/shrek-screaming.mp3',
        name: 'SHREK',
        volume: 1,
        rate: 1
    },
    {
        id: 2,
        img: 'https://tse3.mm.bing.net/th/id/OIP.n0P5a3nNIKm7sdFzKkgrfgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/bandido-quer-67-resenha.mp3',
        name: 'Cachorro quer resenhex',
        volume: 1,
        rate: 1
    },
    {
        id: 3,
        img: 'https://i.pinimg.com/736x/85/5f/ae/855faeca4f9e3c48edb6867cb462aa3e.jpg',
        audio: './audios/voce-nao-tem-aura-mn.mp3', 
        name: 'Voce nao tem aura',
        volume: 1,
        rate: 1
    },
    {
        id: 4,
        img: 'https://tse2.mm.bing.net/th/id/OIP.1P5zTZrvXR9E8riOs0bf2QHaFf?r=0&w=1024&h=759&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/poze-natal.mp3', 
        name: 'Poze Natal',
        volume: 1,
        rate: 1
    },
    {
        id: 5,
        img: 'https://tse1.explicit.bing.net/th/id/OIP.4yPSaSOzg6cdlkbjtLHcpAHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/faaah.mp3', 
        name: '',
        volume: 1,
        rate: 1
    },
    {
        id: 6,
        img: 'https://th.bing.com/th/id/OIP.L6sv-L8zqpFYL76KcdsNywHaH_?w=182&h=198&c=7&r=0&o=7&pid=1.7&rm=3',
        audio: './audios/taco-bell-bong-sfx.mp3', 
        name: 'taco bell bong',
        volume: 1,
        rate: 1
    },
    {
        id: 7,
        img: 'https://th.bing.com/th/id/OIP.SKWGpdnEVzug81WK0y_AywHaEK?w=301&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        audio: './audios/aura-cumbiera.mp3',
        name: 'aura cumbiera',
        volume: 1,
        rate: 1
    },
    {
        id: 8,
        img: 'https://i.pinimg.com/736x/9e/7c/39/9e7c39164eeff89b666d1ac0011e591f.jpg',
        audio: './audios/20-20-20-7.mp3',
        name: '20 20 20 7',
        volume: 1,
        rate: 1
    },
    {
        id: 9,
        img: 'https://tse4.mm.bing.net/th/id/OIP.QKBwXF4sDWM9K9YhxSG3ZgHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/tiro-de-sniper.mp3',
        name: 'tiro de sniper',
        volume: 1,
        rate: 1
    },
    {
        id: 10,
        img: 'https://th.bing.com/th/id/OIP.qHIdIL6FR4kCIZHFUpc30AHaHj?w=187&h=190&c=7&r=0&o=7&pid=1.7&rm=3',
        audio: './audios/cat-laugh-meme-1.mp3',
        name: 'cat laugh ',
        volume: 1,
        rate: 1
    },
    {
        id: 11,
        img: 'https://tse3.mm.bing.net/th/id/OIP.cjfNdOoAjBVR5ZCtT0mgpwHaD0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/jixaw-metal-pipe-falling-sound.mp3',
        name: 'metal pipe falling',
        volume: 1,
        rate: 1
    },
    {
        id: 12,
        img: 'https://tse2.mm.bing.net/th/id/OIP.n6kFJK0mufe0xRqAK7y6kAHaGA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/baby-laughing-meme.mp3', 
        name: 'baby laughing',
        volume: 1,
        rate: 1
    },
    {
        id: 13,
        img: 'https://th.bing.com/th/id/OIP.P--jrP-1s7KYxoPKEQtj3gHaEI?w=295&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        audio: './audios/horrormememusic.mp3', 
        name: 'horror',
        volume: 1,
        rate: 1
    },
    {
        id: 14,
        img: 'https://tse3.mm.bing.net/th/id/OIP.4jdrK1gs0T8AyNdj7TP6wAHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        audio: './audios/cave11_0QWMESM.mp3',
        name: 'among us sound',
        volume: 1,
        rate: 1
    },
    {
        id: 15,
        img: 'https://th.bing.com/th/id/R.badaa73ed482b08655dd4cd2d59c7814?rik=B5Z6e1xD722T3g&pid=ImgRaw&r=0',
        audio: './audios/dexter-meme.mp3',
        name: 'dexter meme',
        volume: 1,
        rate: 1
    }
];

const audio = new Audio();

const container = document.getElementById('soundboard_div');
const toggleButton = document.getElementById('toggle_theme');

let currentItemId = null;

audio.preservesPitch = false;


const temaSalvo = localStorage.getItem('theme');

if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const darkMode = document.body.classList.contains('dark-mode');

    toggleButton.textContent = darkMode ? '☀️' : '🌙';

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
});


dadosMockados.forEach((item) => {
    try {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        const playButton = document.createElement('button');
        const pauseButton = document.createElement('button');

        const controls = document.createElement('div');

        const volumeLabel = document.createElement('label');
        const volumeInput = document.createElement('input');

        const pitchLabel = document.createElement('label');
        const pitchInput = document.createElement('input');

        div.classList.add('div_container_main');

        img.src = item.img;
        img.alt = item.name;

        p.textContent = item.name;

        playButton.textContent = '▶ Play';
        pauseButton.textContent = '⏸ Pause';

        playButton.classList.add('play_button');
        pauseButton.classList.add('pause_button');

        controls.classList.add('audio_controls');

        volumeLabel.textContent = 'Volume';
        volumeInput.type = 'range';
        volumeInput.min = '0';
        volumeInput.max = '1';
        volumeInput.step = '0.05';
        volumeInput.value = item.volume;

        pitchLabel.textContent = 'Tom de voz';
        pitchInput.type = 'range';
        pitchInput.min = '0.5';
        pitchInput.max = '1.5';
        pitchInput.step = '0.05';
        pitchInput.value = item.rate;

        playButton.addEventListener('click', async () => {
            try {
                audio.pause();

                currentItemId = item.id;

                audio.src = item.audio;
                audio.volume = item.volume;
                audio.playbackRate = item.rate;

                await audio.play();

            } catch (error) {
                console.error('Erro ao reproduzir áudio:', error);
            }
        });

        pauseButton.addEventListener('click', () => {
            if (currentItemId === item.id) {
                audio.pause();
            }
        });

        volumeInput.addEventListener('input', () => {
            item.volume = Number(volumeInput.value);

            if (currentItemId === item.id) {
                audio.volume = item.volume;
            }
        });

        pitchInput.addEventListener('input', () => {
            item.rate = Number(pitchInput.value);

            if (currentItemId === item.id) {
                audio.playbackRate = item.rate;
            }
        });

        controls.appendChild(volumeLabel);
        controls.appendChild(volumeInput);

        controls.appendChild(pitchLabel);
        controls.appendChild(pitchInput);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(playButton);
        div.appendChild(pauseButton);
        div.appendChild(controls);

        container.appendChild(div);

    } catch (error) {
        console.error('Erro ao criar card:', error);
    }
});

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(part => part);
    
    // Mevcut sayfayı belirle
    let currentPage = pathParts[pathParts.length - 1] || 'index.html';
    
    // Yeni URL'yi oluştur
    let newUrl;
    if (lang === 'tr') {
        // Türkçe için ana dizine yönlendir
        newUrl = currentPage === 'index.html' ? '/' : currentPage;
    } else {
        // Diğer diller için dil klasörüne yönlendir
        newUrl = `/${lang}/${currentPage}`;
    }
    
    // URL'yi güncelle
    window.location.href = newUrl;
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Dil seçici elementini bul
    const languageSelect = document.getElementById('languageSelect');
    
    // Mevcut dili belirle
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/en/')) {
        languageSelect.value = 'en';
    } else if (currentPath.startsWith('/fr/')) {
        languageSelect.value = 'fr';
    } else {
        languageSelect.value = 'tr';
    }
    
    // Dil değişikliğini dinle
    languageSelect.addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Load SVG images based on current language
    function loadSVGImages() {
        const currentLang = languageSelect.value;
        const images = document.querySelectorAll('img[data-svg]');
        
        // Base path for images
        const basePath = currentLang === 'tr' ? 'images' : '../images';
        
        images.forEach(img => {
            const svgName = img.getAttribute('data-svg');
            let imagePath;
            
            if (currentLang === 'tr') {
                // Turkish images are in the root images directory
                imagePath = `${basePath}/${svgName}.svg`;
            } else {
                // English and French images are in their respective language folders
                imagePath = `${basePath}/${currentLang}/${svgName}.svg`;
            }
            
            // Try to load language-specific SVG
            fetch(imagePath)
                .then(response => {
                    if (response.ok) {
                        img.src = imagePath;
                    } else if (currentLang !== 'tr') {
                        // If language-specific image not found and not Turkish, fallback to Turkish version
                        img.src = `${basePath}/${svgName}.svg`;
                    }
                })
                .catch(() => {
                    if (currentLang !== 'tr') {
                        // If error occurs and not Turkish, fallback to Turkish version
                        img.src = `${basePath}/${svgName}.svg`;
                    }
                });
        });
    }

    // Initial load of SVG images
    loadSVGImages();
});

// Dil güncelleme fonksiyonu
function updateLanguage(language) {
    const translations = {
        tr: {
            title: 'OynaXo - 3 Taş Zeka Oyunu',
            subtitle: 'Klasik taş oyununun modern versiyonu',
            features: 'Özellikler',
            gameModes: 'Oyun Modları',
            onlineMode: 'Çevrimiçi Mod',
            offlineMode: 'Çevrimdışı Mod',
            specialFeatures: 'Özel Özellikler',
            playWithFriends: 'Arkadaşlarınızla oynayın',
            playWithRandom: 'Rastgele oyuncularla eşleşin',
            gridOptions: '3x3, 4x4 ve 5x5 grid seçenekleri',
            passAndPlay: 'Pass & Play ile arkadaşlarınızla oynayın',
            playWithDora: 'Dora ile yapay zeka modu',
            difficultyLevels: 'Kolay, Orta ve Zor zorluk seviyeleri',
            coinSystem: 'Jeton sistemi ve kozmetik mağazası',
            leaderboard: 'Global liderlik tablosu',
            multiLanguage: 'Çoklu dil desteği',
            screenshots: 'Ekran Görüntüleri',
            contact: 'İletişim',
            links: 'Bağlantılar',
            privacy: 'Gizlilik Politikası',
            terms: 'Kullanım Koşulları',
            copyright: 'Tüm hakları saklıdır.',
            downloadAppStore: 'App Store\'dan İndir',
            downloadPlayStore: 'Google Play\'den İndir',
            multipleGameModes: 'Çoklu Oyun Modları',
            multipleGameModesDesc: '3x3, 4x4 ve 5x5 grid seçenekleri ile oyunu daha zorlu hale getirin',
            artificialIntelligence: 'Yapay Zeka',
            artificialIntelligenceDesc: 'Dora ile oynayın - Kolay, Orta ve Zor seviyelerde yapay zeka',
            onlinePlay: 'Çevrimiçi Oyun',
            onlinePlayDesc: 'Arkadaşlarınızla veya rastgele oyuncularla gerçek zamanlı oynayın',
            offlinePlay: 'Çevrimdışı Oyun',
            offlinePlayDesc: 'Pass & Play modu ile arkadaşlarınızla yüz yüze oynayın',
            cosmeticStore: 'Kozmetik Mağazası',
            cosmeticStoreDesc: 'Jeton kazanın ve özel temalar satın alın',
            leaderboardTitle: 'Liderlik Tablosu',
            leaderboardDesc: 'Global sıralamada yerinizi alın ve diğer oyuncularla rekabet edin'
        },
        en: {
            title: 'PlayXo - 3 Stones Brain Game',
            subtitle: 'Modern version of the classic stone game',
            features: 'Features',
            gameModes: 'Game Modes',
            onlineMode: 'Online Mode',
            offlineMode: 'Offline Mode',
            specialFeatures: 'Special Features',
            playWithFriends: 'Play with friends',
            playWithRandom: 'Match with random players',
            gridOptions: '3x3, 4x4 and 5x5 grid options',
            passAndPlay: 'Play with friends via Pass & Play',
            playWithDora: 'Play with Dora AI',
            difficultyLevels: 'Easy, Medium and Hard difficulty levels',
            coinSystem: 'Coin system and cosmetic store',
            leaderboard: 'Global leaderboard',
            multiLanguage: 'Multi-language support',
            screenshots: 'Screenshots',
            contact: 'Contact',
            links: 'Links',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            copyright: 'All rights reserved.',
            downloadAppStore: 'Download on App Store',
            downloadPlayStore: 'Get it on Google Play',
            multipleGameModes: 'Multiple Game Modes',
            multipleGameModesDesc: 'Make the game more challenging with 3x3, 4x4, and 5x5 grid options',
            artificialIntelligence: 'Artificial Intelligence',
            artificialIntelligenceDesc: 'Play with Dora - AI with Easy, Medium, and Hard difficulty levels',
            onlinePlay: 'Online Play',
            onlinePlayDesc: 'Play in real-time with friends or random players',
            offlinePlay: 'Offline Play',
            offlinePlayDesc: 'Play face-to-face with friends via Pass & Play mode',
            cosmeticStore: 'Cosmetic Store',
            cosmeticStoreDesc: 'Earn coins and purchase special themes',
            leaderboardTitle: 'Leaderboard',
            leaderboardDesc: 'Take your place in the global rankings and compete with other players'
        },
        fr: {
            title: 'PlayXo - Jeu de Réflexion 3 Pierres',
            subtitle: 'Version moderne du jeu classique de pierres',
            features: 'Fonctionnalités',
            gameModes: 'Modes de Jeu',
            onlineMode: 'Mode En Ligne',
            offlineMode: 'Mode Hors Ligne',
            specialFeatures: 'Fonctionnalités Spéciales',
            playWithFriends: 'Jouez avec des amis',
            playWithRandom: 'Jouez avec des joueurs aléatoires',
            gridOptions: 'Options de grille 3x3, 4x4 et 5x5',
            passAndPlay: 'Jouez avec des amis via Pass & Play',
            playWithDora: 'Jouez avec Dora IA',
            difficultyLevels: 'Niveaux de difficulté Facile, Moyen et Difficile',
            coinSystem: 'Système de pièces et boutique cosmétique',
            leaderboard: 'Classement mondial',
            multiLanguage: 'Support multilingue',
            screenshots: 'Captures d\'écran',
            contact: 'Contact',
            links: 'Liens',
            privacy: 'Politique de Confidentialité',
            terms: 'Conditions d\'Utilisation',
            copyright: 'Tous droits réservés.',
            downloadAppStore: 'Télécharger sur l\'App Store',
            downloadPlayStore: 'Obtenir sur Google Play',
            multipleGameModes: 'Modes de Jeu Multiples',
            multipleGameModesDesc: 'Rendez le jeu plus difficile avec des options de grille 3x3, 4x4 et 5x5',
            artificialIntelligence: 'Intelligence Artificielle',
            artificialIntelligenceDesc: 'Jouez avec Dora - IA avec niveaux de difficulté Facile, Moyen et Difficile',
            onlinePlay: 'Jeu En Ligne',
            onlinePlayDesc: 'Jouez en temps réel avec des amis ou des joueurs aléatoires',
            offlinePlay: 'Jeu Hors Ligne',
            offlinePlayDesc: 'Jouez en face à face avec des amis via le mode Pass & Play',
            cosmeticStore: 'Boutique Cosmétique',
            cosmeticStoreDesc: 'Gagnez des pièces et achetez des thèmes spéciaux',
            leaderboardTitle: 'Classement',
            leaderboardDesc: 'Prenez votre place dans le classement mondial et rivalisez avec d\'autres joueurs'
        }
    };

    // Metinleri güncelle
    document.title = translations[language].title;
    document.querySelector('.subtitle').textContent = translations[language].subtitle;
    document.querySelector('.features h2').textContent = translations[language].features;
    document.querySelector('.game-modes h2').textContent = translations[language].gameModes;
    document.querySelector('.screenshots h2').textContent = translations[language].screenshots;
    
    // App Store ve Play Store butonları
    document.querySelector('.app-store-button img').alt = translations[language].downloadAppStore;
    document.querySelector('.play-store-button img').alt = translations[language].downloadPlayStore;
    
    // Özellik kartları
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = translations[language].multipleGameModes;
    featureCards[0].querySelector('p').textContent = translations[language].multipleGameModesDesc;
    featureCards[0].querySelector('img').alt = translations[language].multipleGameModes;
    
    featureCards[1].querySelector('h3').textContent = translations[language].artificialIntelligence;
    featureCards[1].querySelector('p').textContent = translations[language].artificialIntelligenceDesc;
    featureCards[1].querySelector('img').alt = translations[language].artificialIntelligence;
    
    featureCards[2].querySelector('h3').textContent = translations[language].onlinePlay;
    featureCards[2].querySelector('p').textContent = translations[language].onlinePlayDesc;
    featureCards[2].querySelector('img').alt = translations[language].onlinePlay;
    
    featureCards[3].querySelector('h3').textContent = translations[language].offlinePlay;
    featureCards[3].querySelector('p').textContent = translations[language].offlinePlayDesc;
    featureCards[3].querySelector('img').alt = translations[language].offlinePlay;
    
    featureCards[4].querySelector('h3').textContent = translations[language].cosmeticStore;
    featureCards[4].querySelector('p').textContent = translations[language].cosmeticStoreDesc;
    featureCards[4].querySelector('img').alt = translations[language].cosmeticStore;
    
    featureCards[5].querySelector('h3').textContent = translations[language].leaderboardTitle;
    featureCards[5].querySelector('p').textContent = translations[language].leaderboardDesc;
    featureCards[5].querySelector('img').alt = translations[language].leaderboardTitle;
    
    // Oyun modları
    const modeCards = document.querySelectorAll('.mode-card');
    modeCards[0].querySelector('h3').textContent = translations[language].onlineMode;
    modeCards[1].querySelector('h3').textContent = translations[language].offlineMode;
    modeCards[2].querySelector('h3').textContent = translations[language].specialFeatures;
    
    const modeLists = document.querySelectorAll('.mode-card ul');
    modeLists[0].innerHTML = `
        <li>${translations[language].playWithFriends}</li>
        <li>${translations[language].playWithRandom}</li>
        <li>${translations[language].gridOptions}</li>
    `;
    modeLists[1].innerHTML = `
        <li>${translations[language].passAndPlay}</li>
        <li>${translations[language].playWithDora}</li>
        <li>${translations[language].difficultyLevels}</li>
    `;
    modeLists[2].innerHTML = `
        <li>${translations[language].coinSystem}</li>
        <li>${translations[language].leaderboard}</li>
        <li>${translations[language].multiLanguage}</li>
    `;
    
    // Footer
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections[0].querySelector('h4').textContent = translations[language].contact;
    footerSections[1].querySelector('h4').textContent = translations[language].links;
    
    const footerLinks = footerSections[1].querySelectorAll('a');
    footerLinks[0].textContent = translations[language].privacy;
    footerLinks[1].textContent = translations[language].terms;
    
    document.querySelector('.footer-bottom p').textContent = `© 2025 OynaXo. ${translations[language].copyright}`;
}

// Screenshot Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.screenshot-slider');
    const track = document.querySelector('.screenshot-track');
    const slides = document.querySelectorAll('.screenshot-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');

    let currentSlide = 0;
    const slideCount = slides.length;

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 25}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Event Listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance when hovering over slider
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// iOS Dynamic Link Handler
document.addEventListener('DOMContentLoaded', function() {
    const appStoreButton = document.getElementById('appStoreButton');
    
    // Check if the device is iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        // iOS için App Store ID'sini kullanarak dinamik link oluştur
        const appStoreId = '6746658648'; // App Store ID
        
        // Firebase Dynamic Links'i kullanarak link oluştur
        const dynamicLinkParams = {
            link: `https://apps.apple.com/app/id${appStoreId}`,
            domainUriPrefix: 'https://oynaxo.page.link',
            android: {
                packageName: 'app.web.oynaxo'
            },
            ios: {
                bundleId: 'app.web.oynaxo',
                appStoreId: appStoreId
            },
            navigation: {
                forcedRedirectEnabled: true
            }
        };

        // Önce Firebase'in yüklenmesini bekle
        if (typeof firebase !== 'undefined' && firebase.dynamicLinks) {
            firebase.dynamicLinks().createDynamicLink(dynamicLinkParams)
                .then((url) => {
                    console.log('Dynamic link created:', url);
                    appStoreButton.href = url;
                })
                .catch((error) => {
                    console.error('Dynamic link creation failed:', error);
                    // Fallback link
                    appStoreButton.href = `https://apps.apple.com/app/id${appStoreId}`;
                });
        } else {
            console.error('Firebase Dynamic Links not initialized');
            // Fallback link
            appStoreButton.href = `https://apps.apple.com/app/id${appStoreId}`;
        }
    }
}); 
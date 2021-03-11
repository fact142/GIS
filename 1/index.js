    const coordinates = {
        kremlin: [55.797522, 49.106993],
        palaceOfLandowners: [55.800431, 49.112414],
        kazan: [55.813059, 49.107787], 
        pan: [55.791222, 49.122352], 
        dvoika: [55.792263, 49.121826]
    } 
    
    const init = (ymaps) => { 
        const myMap = new ymaps.Map('map', {
                center: coordinates.kremlin,
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),

            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Kazan Kremlin',
                balloonContent: 'Казанский Кремль'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/png;base64,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',
                iconImageSize: [24, 24],
                iconImageOffset: [-5, -38]
            }),

            myPlacemarkWithContent = new ymaps.Placemark(coordinates.palaceOfLandowners, {
                hintContent: 'Дворец Землевладельцев',
                balloonContent: 'PalaceOfLandowners'
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'data:image/png;base64,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',
                iconImageSize: [24, 24],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
            }),
            
            myPlacemarkKazan = new ymaps.Placemark(coordinates.kazan, {
                hintContent: 'Kazan',
                balloonContent: 'Казан'
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'images/blackLocator.png',
                iconImageSize: [24, 24],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
            }),

            myPlacemarkSkovorodka = new ymaps.Placemark(coordinates.pan, {
                hintContent: '',
                balloonContent: 'Pan'
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'images/redLocator.png',
                iconImageSize: [24, 24],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
            }),

            myPlacemark2ka = new ymaps.Placemark(coordinates.dvoika, {
                hintContent: 'Двойка',
                balloonContent: 'Dvoika'
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBEuZb2m54NPuGiyx_Rmy4keShjc539Desg&usqp=CAU',
                iconImageSize: [24, 24],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
            }),

            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    coordinates.kazan,
                    coordinates.palaceOfLandowners,
                    coordinates.kremlin,
                    coordinates.dvoika,
                    coordinates.pan
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            }), 

            firstAnimatedLine = new ymaps.AnimatedLine([
                [55.815970, 49.099940],
                [55.813097, 49.102086],
                [55.813019, 49.102375], 
                [55.813835, 49.104541],
                [55.812832, 49.105997], 
                coordinates.kazan 

            ], {}, {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 4000
            }),

            secondAnimatedLine = new ymaps.AnimatedLine([
                coordinates.pan,
                [55.790690, 49.123340], 
                [55.790038, 49.123251],
                [55.789568, 49.122940],
                [55.788586, 49.121597],
                [55.787956, 49.122931],
                [55.787315, 49.121861]

            ], {}, {
                strokeColor: "#1E98FF",
                strokeWidth: 5,
                animationTime: 4000
            })    

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent)
            .add(myPlacemarkKazan)
            .add(myPlacemark2ka)
            .add(myPlacemarkSkovorodka)
            .add(multiRoute)
            .add(firstAnimatedLine)
            .add(secondAnimatedLine)

        const playAnimation = () => {
            secondAnimatedLine.reset()
            firstAnimatedLine.animate().
                then(() => secondAnimatedLine.animate())
        }
        playAnimation()
    };

    ymaps.ready(['AnimatedLine']).then(init)
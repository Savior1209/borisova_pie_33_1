const story = document.getElementById('story');
const options = document.getElementById('options');
const stepImage = document.getElementById('stepImage');
const progressContainer = document.getElementById('progressContainer');
const restartBtn = document.getElementById('restartBtn');
const inventoryTable = document.createElement('table');
const inventory = document.querySelector('.inventory');
const tableOff = document.querySelector(".table-in")
let step = 1;


const stepImages = {
    1: 'img/vvedenie.jpg', 
    2: 'img/domoi.jpg',
    3: 'img/bomzi9.png',
    4: 'img/mama_zvonit.jpg',
    5: 'img/relax.jpg',
    6: 'img/hleb.jpg',
    7: 'img/hlebaa.jpg',
    8: 'img/v_magazin.jpg',
    9: 'img/razuv.jpg',
    10: 'img/okruzenie.jpg',
    11: 'img/horovod1.png',
    12: 'img/draka1.png',
    13: 'img/domofon.jpg',
    14: 'img/otkrivaem.jpg',
    15: 'img/dver_domoi.jpg',
    16:'img/polzem.png',
    17: 'img/ranenia.jpg',
    18: 'img/spim.png',
    19: 'img/pomogite.png',
    20: 'img/usually_day.png',
    21: 'img/dolgii_put_domoi.jpg',
    22: 'img/otdih.png',
    23: 'img/otdihaem.png',
    24: 'img/police.png',
    25: 'img/domofon.jpg',
    26: 'img/bomz7.png',
    27: 'img/v_mashine.png',
    28: 'img/pivko.jpg',
    29: 'img/veselo.jpg',
    30: 'img/doram.jpg',
    31: 'img/ssora.jpg',
    32: 'img/ne_dopolz.jpg',
    33: 'img/porazenie.jpg',
    34: 'img/kachok.jpg',
    35: 'img/bud_muzikom.jpg',
    36: 'img/hudoi_tolst.jpg',
    38: 'img/begom.jpeg',
    39: 'img/rana.jpg',
    40: 'img/draka3.png',
    41: 'img/padaem.jpg',
    42: 'img/na_etaz.jpg',
    43: 'img/good_day.jpg'
};
function showOptions(optionObj) {
    options.innerHTML = '';
    optionObj.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => handleOption(option.nextStep, option.scores, option.inventoryChanges);
        options.appendChild(button);
    });
}
function handleOption(nextStep) {
    step = nextStep;
    displayStep();
}
function displayStep() {
    switch (step) {
        case 1:
            story.textContent = "Действие происходит в Сеуле.Вы обычный студент 2 курса. Но кто бы мог подумать, что место, куда вы кладёте ключи от дома, может сыграть большую роль в вашем будущем приключении.";
            stepImage.src = stepImages[1];
            showOptions([
                { text: "Продолжить", nextStep: 2 }, 
            ]);
            break;
        case 2:
            story.textContent = "В один прекрасный вечерний день вы как обычно возвращались домой после пар. Ничего не предвещало беды. Вы, как обычно, приехали домой на машине и направляетесь к своему подъезду. Ваши действия?";
            stepImage.src = stepImages[2];
            showOptions([
                { text: "Достать ключи от дома в машине", nextStep: 3 },
                { text: "Достать ключи от дома пока идете до подъезда", nextStep: 25 },
                { text: "Достать ключи от дома у подъезда", nextStep: 26 }
            ]);
            break;
            /*Ветка со сзвонком мамы*/ 
        case 3:
            story.textContent = "Вы достали ключи в машине и, когда подходили к подъезду вы быстро прошли мимо группы людей, объединённых общим интересом к горячительным напиткам, собравшихся на лавочке, перед входом в ваш подъезд (алкашей). Так как ключи вы держали в руках вы сразу открыли дверь и зашли домой.";
            stepImage.src = stepImages[3];
            showOptions([
                { text: "Позвонила мама", nextStep: 4},
                { text: "Подняться в  свою квартиру", nextStep: 5 }
            ]);
            break;
        case 4:
            story.textContent = "Вам позвонила мама. Ваши действия?";
            stepImage.src = stepImages[4];
            showOptions([
                { text: "Ответить на звонок", nextStep: 6 },
                { text: "Телефон в режиме «Не беспокоить», вы не увидели звонок", nextStep: 7 }
            ]);
            break;
        case 5:
            story.textContent = "Вы спокойно поднялись в квартиру, покушали и легли смотреть дораму «Счастье» с Пак Хён Сиком в главной роли.";
            stepImage.src = stepImages[5];
            displayEndScreen();
            break;
        case 6:
            story.textContent = "Ваша мама попросила сходить за хлебом. Ваш ответ?";
            stepImage.src = stepImages[6];
            showOptions([
                { text: "Пойти в магазин", nextStep: 21 },
                { text: "Сказать, что завтра купите", nextStep: 22 }
            ]);
            break;
        case 22:
            story.textContent = "Хлеб был не нужен срочно, поэтому вы просто поднялись в квартиру. Сегодня вы сильно устали и теперь вы можете отдохнуть. ";
            stepImage.src = stepImages[22];
            displayEndScreen();
            break;
        case 7:
            story.textContent = "Когда вы открыли дверь квартиры  мама сказала вам, что дома нет хлеба и нужно за ним сходить. Что вы ей ответили?";
            stepImage.src = stepImages[7];
            showOptions([
                { text: "Хорошо, сейчас схожу", nextStep: 8 },
                { text: "Давай я завтра куплю после пар?", nextStep: 9 }
            ]);
            break;
        case 8:
            story.textContent = "";
            stepImage.src = stepImages[8];
            showOptions([
                { text: "Что было дальше?", nextStep: 10},
            ]);
            break;
        case 9:
            story.textContent = "Мама согласилась и наконец-то пропустила вас в дом. День прекрасно закончился и вы остались целы. Поздравляем!";
            stepImage.src = stepImages[9];     
            displayEndScreen();
            break;
        case 10:
            story.textContent = "Один из них встал и подошел к вам с нелестными словами в ваш адрес. Он усомнился в вашей ориентации, что сильно вам не понравилось . Ваши действия?";
            stepImage.src = stepImages[10];
            showOptions([
                { text: "Ударить его в лицо со всей силы", nextStep: 24 },
                { text: "Ударить его в живот со всей силы", nextStep: 11},
                { text: "Пнуть его в лицо", nextStep: 12 },
                { text: "Вы нашли ключи и решили промолчать", nextStep: 13}
            ]);
            break;
        case 11:
            story.textContent = "Вы довольно быстро пожалели о своём решении, ведь вы были один, а их трое. Численность победила и вас побили. Но вам повезло, что у соседнего подъезда сидела бабуля. Она и вызвала ментов, которые быстро приехали и любезно сопроводили ту троицу в обезьянник. Они спросили у вас, будете ли вы писать на них заявление. Каков ваш ответ? ";
            stepImage.src = stepImages[11];
            showOptions([
                { text: "Конечно буду!", nextStep: 19 },
                { text: "Нет, а то ещё найдут меня потом(", nextStep: 18}
            ]);
            break;
        case 18:
            story.textContent = "На этом ваши приключения закончились и вы наконец-то вернулись домой. День успешно окончен!";
            stepImage.src = stepImages[18];
            displayEndScreen();
            break;
        case 19:
            story.textContent = "Господа полицейские сказали вам куда приехать, для написания заявления. ";
            stepImage.src = stepImages[19];
            showOptions([
                { text: "Вы написали заявление", nextStep: 20 }
            ]);
            break;
        case 20:
            story.textContent = "После этого вы их больше не видели. И ваша жизнь снова стала обычной, а вчерашний день стал ещё одной весёлой историей из вашей жизни.";
            stepImage.src = stepImages[20];
            displayEndScreen();
            break;
        case 24:
            story.textContent = "Вы ударили и побежали. А так как те люди были не совсем в форме они не смогли вас догнать. Они пытались найти вас, но нашли ментов, которые отвезли их в обезьянник. Тем временем вы спокойно зашли в подъезд.  Вы не переживали, что они запомнят ваше лицо, так как вы были в капюшоне. На этот раз день закончился без травм.";
            stepImage.src = stepImages[24];
            displayEndScreen();
            break;
        case 12:
            story.textContent = "Это было хорошее решение. Он не успел среагировать и от удара упал на землю. Но подключились его друзья и напомнили вам важное правило жизни «Не важно насколько ты силён – толпа всё равно победит». В итоге вас просто запинали. Они пнули вас по голове и вы потеряли сознание. Что вы сделали, когда пришли в себя? ";
            stepImage.src = stepImages[12];
            showOptions([
                { text: "Хотели вызвать ментов", nextStep: 16 },
                { text: "Поползли домой", nextStep: 17 }
            ]);
            break;
        case 16:
            story.textContent = "Вы почти набрали номер, но поняли, что вы первый ударили их, а значит это отчасти ваша вина и менты могли ещё выписать вам штраф за это. Поэтому решили просто заползать в квартиру. Этот день был не очень удачным. Пройдите жизнь заново.";
            stepImage.src = stepImages[16];           
            displayEndScreen();
            break;
        case 17:
            story.textContent = "Прийдя домой вы обработали раны и легли спать. Теперь вы знаете, что в следующий раз нужно не ждать, когда вас ударят в ответ, а бить и бежать!  Вы узнали новое правило жизни «рождённый бегать – «ничего» не получит».";
            stepImage.src = stepImages[17];          
            displayEndScreen();
            break;      
        case 13:
            story.textContent = " Достав ключи вы быстро зашли в подъезд и сразу закрыли за собой дверь. Ваши дальнейшие действия?";
            stepImage.src = stepImages[13];
            showOptions([
                { text: "Пойти в квартиру", nextStep: 14 },
                { text: "Сказать ответные слова оскорбления  тем людям за закрытой дверью", nextStep: 15 }
            ]);
            break;
        case 14:
            story.textContent = "Вы спокойный и адекватный человек, вы понимали, что те люди не совсем дружат с головой, поэтому решили не опускаться на их уровень и просто поднялись в квартиру. Так закончился ещё один обычный день.";
            stepImage.src = stepImages[14];          
            displayEndScreen();
            break;
        case 15:
            story.textContent = "Сказав это, вы, уже довольные результатом,  поднялись в квартиру. На этом ваши приключения закончились))";
            stepImage.src = stepImages[15];        
            displayEndScreen();
            break;
        case 21:
            story.textContent = "Вы пошли в магазин. Ключи положили в карман. Когда вы возвращались всё та же весёлая группа людей, с общим интересом к одному напитку, сидела на лавочке. Подойдя к подъезду вы достали ключи из кармана и открыли дверь.Те люди не успели до вас докопаться. ";
            stepImage.src = stepImages[21];
            showOptions([
                { text: "Зайти в подъезд", nextStep: 23 }
            ]);
            break;
        case 23:
            story.textContent = " Вы вернулись домой и даже не пострадали. Вам очень повезло, сегодня ваш день!";
            stepImage.src = stepImages[23];
            displayEndScreen();
            break;
      /* быстрый конец*/
        case 25:
            story.textContent = " Вы начинаете доставать ключи, но они путаются с наушниками. Как вы поступите?";
            stepImage.src = stepImages[25]; 
            showOptions([
                { text: "Быстро достать ключи", nextStep: 42 },
                { text: "Медленно достать ключи", nextStep: 43 }           
            ]);
            break;
            case 42:
            story.textContent = " Вы успели достать ключи от домофона и не дали возможности весёлым людям у подъезда, с градусным напитком, докопаться до вас. Поздравляем! Вы успешно минули преграду и попали в дом. День закончился на хорошей ноте.";
            stepImage.src = stepImages[42];
            displayEndScreen();
            break;

            case 43:
            story.textContent = "В Решили сначала распутать ключи, но увидели, как весёлые люди у подъезда, с градусным напитком, уже хотели докопаться до вас. Но вы всё-таки решили распутать наушники потом и поскорее попасть в дом. Поздравляем! Вы избежали возможных неприятностей.";
            stepImage.src = stepImages[43];
            displayEndScreen();
            break;
        /* неожиданные повороты судьбы*/
        case 26:
            story.textContent = " Когда вы уже подходили к своему подъезду вы увидели группу людей, объединённых общим интересом к горячительным напиткам, собравшихся на лавочке, перед входом в ваш подъезд (алкашей). Вы собирались достать ключи от домофона. Где лежат ваши ключи?  ";
            stepImage.src = stepImages[26];
            showOptions([
                { text: "Остались в машине", nextStep: 28 },
                { text: "В кармане куртки 100%", nextStep: 27 },
                { text: "Где-то в сумке ", nextStep: 35 }            
            ]);
            break;
        case 27:
            story.textContent = "Вы были уверены, что ключи в кармане, но это оказалось не так. Вы потеряли ключи, а дома никого не было. Вам пришлось ночевать в машине. Хотя бы телефон был заряжен и вы смотрели дорамы.";
            stepImage.src = stepImages[27];           
            displayEndScreen();
            break;
        case 28:
            story.textContent = "Вы вернулись за ключами в машину. По дороге обратно вы решили купить соджу. Когда вы подходили к подъезду, бухатыри, приняли вас за своего и предложили выпить вместе. Ваши действия?";
            stepImage.src = stepImages[28];
            showOptions([
                { text: "Конечно согласиться", nextStep: 29 },
                { text: "Вежливо отказаться", nextStep: 30 },
                { text: "Грубо отказаться", nextStep: 31 }
            ]);
            break;
        case 29:
            story.textContent = "Вы сели с ними на лавочке и пол ночи вместе пили. Они оказались очень интересными собеседниками и даже руководителями отделов в разных компаниях. Вы как раз искали работу в IT Компании и они предложили вам прийти к ним. Так вы нашли себе хорошую работу и новых друзей. Вы были рады такому исходу.";
            stepImage.src = stepImages[29];           
            displayEndScreen();
            break;
        case 30:
            story.textContent = " Так как вы вежливо им отказали и сказали, что вам завтра рано на учёбу, они не стали вас больше задерживать. Вы пожелали друг другу хорошего вечера. Ваш день закончился отлично! Вы пили соджу за просмотром дорамы «Счастье».";
            stepImage.src = stepImages[30];           
            displayEndScreen();
            break;
        case 31:
            story.textContent = "Вы решили нагрубить мирным людям и после этого они уже не были такими мирными. Что вы ещё сделали ? ";
            stepImage.src = stepImages[31];
            showOptions([
                { text: "Начали оскорблять их", nextStep: 32 },
                { text: "Решили сразу бить", nextStep: 33 }
            ]);
            break;
        case 32:
            story.textContent = "Несмотря на ваши оскорбления они держали себя в руках и пытались разрешить конфликт мирно. Но вы этого не хотели и ударили одного из них по лицу и разбили ему нос. За него впряглись его товарищи и вы проиграли. Как итог: вы были побиты. (Вы это заслужили)";
            stepImage.src = stepImages[32];
            displayEndScreen();
            break;
        case 33:
            story.textContent = "Сначала вы ударили одного из них, кто казался вам слабее. Бухатыри не стали стоять в стороне и терпеть ваши нападки. Из-за их одежды казалось, что все они хлюпики, но позже вы поняли, что сильно заблуждались, когда вас кидали прогибом. Вы ударились головой и отключились. Проснулись на лавочке и поковыляли домой. !";
            stepImage.src = stepImages[33];
            showOptions([{ text: "Урок получен ", nextStep: 34 }]);
            break;
        case 34:
            story.textContent = "Не суди людей по одежде. Оверсайз может сыграть с тобой злую шутку. Конец!";
            stepImage.src = stepImages[34];
            displayEndScreen();
            break;
        case 35:
            story.textContent = "Пока вы искали ключи от домофона, людям на лавочке не понравилась ваша одежда и они словами усомнились в вашей ориентации. Вам это естественно не понравилось. Ваши действия?";
            stepImage.src = stepImages[35];
            showOptions([
                { text: "Ударить их", nextStep: 36 },
                { text: "Ответить словами", nextStep: 37 },
                { text: "Промолчать", nextStep: 40 }
            ]);
            break;
        case 36:
            story.textContent = "Вы решаете действовать на опережение и бьёте их, но они были крупнее вас, и ваш удар, как комариный укус для них. Но вот они били больно и много. Как итог: вас просто побили в одни ворота. День был не удачный и надеемся вы больше не повторите свои ошибки.";
            stepImage.src = stepImages[36];
            displayEndScreen();
            break;
        case 37:
            story.textContent = "Вы начали отвечать им и, когда поворачивались к ним, увидели, как рука  одного из них пытается поближе познакомиться с вашим лицом. Что вы сделали?";
            stepImage.src = stepImages[37];
            showConditionalOptions([
                { text: "Успели увернуться", nextStep: 38},
                { text: "Не успели среагировать", nextStep: 39 },
                { text: "Ударили в ответ", nextStep: 41 }
            ]);
            break;
        case 38:
            story.textContent = "Вы легко увернулись, а он упал и разбил лицо. Его друзья начали ему помогать, а вы успели забежать в подъезд.  Вы чудом смогли спаслись от бухатырей, поздравляем! День спасён.";
            stepImage.src = stepImages[38];            
            displayEndScreen();
            break;
        case 39:
            story.textContent = " Вам разбили нос. У вас пошла кровь и вы испачкали всю одежду. Вы ударяете в ответ и рассекаете бровь одному из них. Двое других попытались вас ударить, но они были слишком медленными и вы смогли побить их.  Вернувшись домой вы обработали свои раны и пошли отдыхать. День был испорчен.";
            stepImage.src = stepImages[39];             
            displayEndScreen();   
            break;
        case 40:
            story.textContent = "Вы думали, что если промолчите это вам поможет и они забудут про вас, но это оказалось не так. Вас спасло только то, что они были слишком пьяны и еле стояли на ногах, поэтому вы легко их побили и, найдя ключи, зашли в дом. Вы победили, поздравляем!";
            stepImage.src = stepImages[40];   
            displayEndScreen();
            break;
        case 41:
            story.textContent = "Вы уклонились и ударили в ответ. Но вы забыли, что он был не один, и его друзья ударили вас по голове сзади. Вы отключились и очнулись уже в больнице. Вы ничего не понимали. А врач сказал, что вы потеряли память. После этого инцидента вы уже не могли вернуться к нормальной жизни. Из-за повреждения головы вы стали инвалидом. В итоге, спустя год вы решаете покончить с собой и прыгаете с крыши.";
            stepImage.src = stepImages[41];
            displayEndScreen();
            break;
    }
}
function displayEndScreen() {
    restartBtn.style.display = 'block';
    options.style.display = 'none';
    tableOff.style.display = 'block';
    options.innerHTML = '';
}
restartBtn.onclick = () => {
    step = 1;
    restartBtn.style.display = 'none';
    options.style.display = 'grid   ';
    story.innerHTML = '';
    if (window.innerWidth > 700) {
        tableOff.style.display = 'grid';
    }
    else {
        tableOff.style.display = 'block';
    }
    displayStep();
};
displayStep();

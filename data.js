const DATA = {
base: [
{
  id:"pan-brioche",
  es:{title:"PAN BRIOCHE", yield:"rendimiento 10 pzas servicio / 1 barra acompañamiento",
    ing:[["harina de trigo","500 gr"],["levadura en polvo","20 gr"],["leche entera","100 ml"],["mantequilla","100 gr"],["agua","100 ml"],["sal","10 gr"],["huevo","1 pza"],["azucar","30 gr"]],
    proc:["En el bowl de batidora colocar los secos (harina, levadura en polvo, sal, azucar) y encender a velocidad baja por dos minutos, agregar el agua y la leche subiendo a velocidad media y por ultimo agregar el huevo y la mantequilla en cubos, dejar amasar por unos 6 min hasta que la masa sea homogenea y se pueda agarrar sin que se pegue en las manos, dejar reposar en un bowl con playo hasta que doble su tamaño, amasar ligeramente y dar forma de bolitas de 25 gr c/u para posteriormente acomodarlas de 4 en 4 juntas y barnizar con huevo, se deja levar nuevamente por 20 min y se mete a hornear a 180 c durante 20 min (calor seco 0% humedad)",
           "En caso de preparar la barra se coloca el total amasado con rodillo y doblado en pliege enrollado dejando levar igual por 20 min pero el tiempo de horneado cambia a 25 min"]},
  ru:{title:"БРИОШЬ (ХЛЕБ)", yield:"Выход: 10 шт. на подачу / 1 булка на гарнир",
    ing:[["пшеничная мука","500 г"],["сухие дрожжи","20 г"],["цельное молоко","100 мл"],["сливочное масло","100 г"],["вода","100 мл"],["соль","10 г"],["яйцо","1 шт."],["сахар","30 г"]],
    proc:["В чаше миксера засыпать сухие компоненты (муку, дрожжи, соль, сахар), включить на низкой скорости на 2 минуты, добавить воду и молоко, увеличивая скорость до средней. В конце добавить яйцо и масло, нарезанное кубиками. Вымешивать около 6 минут до однородного эластичного теста, не липнущего к рукам. Оставить в накрытой миске до увеличения вдвое. Слегка обмять, сформировать шарики по 25 г и уложить по 4 штуки вместе, смазать яйцом. Дать расстояться ещё 20 минут и выпекать при 180°C 20 минут (сухой жар, влажность 0%).",
           "Для варианта «булка»: раскатать всё тесто скалкой, свернуть рулетом со складкой, дать расстояться те же 20 минут, но время выпечки — 25 минут."]}
},
{
  id:"karaage",
  es:{title:"POLLO REBOSADO KARAAGE", yield:"rinde 5 porciones",
    ing:[["muslo de pollo en cubos","900 gr"],["salsa de soya","300 ml"],["ajo","20 gr"],["cebolla blanca","150 gr"],["jengibre","25 gr"],["chile morita seco","15 gr"],["aceite de ajonjoli","10 ml"],["harina de trigo","250 gr"],["maicena","150 gr"],["pimienta sichuan","5 gr"],["canela en rama","10 gr"]],
    proc:["Licuar la salsa de soya, el ajo, jengibre, cebolla y pimienta sichuan, agregar al pollo cortado en un cambro para reposar",
          "Agregar la canela en rama troceada y el chile morita con un pequeño corte para que suelte sabor, dejar en reposo por al menos 2 hrs",
          "Pasado este tiempo se porciona en bolsitas de 180 gr cada una con un poco del marinado, por ultimo se pasa por harina con maicena hasta rebosar completamente y se lleva a fritura profunda por 3-4 min a 180°c hasta quedar dorado"]},
  ru:{title:"КУРИНОЕ КАРААГЕ В КЛЯРЕ", yield:"Выход: 5 порций",
    ing:[["куриные бёдра, кубиками","900 г"],["соевый соус","300 мл"],["чеснок","20 г"],["белый лук","150 г"],["имбирь","25 г"],["сушёный чили морита","15 г"],["кунжутное масло","10 мл"],["пшеничная мука","250 г"],["кукурузный крахмал","150 г"],["сычуаньский перец","5 г"],["палочка корицы","10 г"]],
    proc:["Пробить блендером соевый соус, чеснок, имбирь, лук и сычуаньский перец, залить маринадом нарезанную курицу в контейнере.",
          "Добавить раздробленную палочку корицы и надрезанный чили морита (для раскрытия аромата). Мариновать не менее 2 часов.",
          "Расфасовать порциями по 180 г с частью маринада, обвалять в смеси муки с крахмалом до полного покрытия и жарить во фритюре 3–4 минуты при 180°C до золотистой корочки."]}
},
{
  id:"arroz-meloso",
  es:{title:"ARROZ ROJO MELOSO", yield:"rinde 1 porcion de 190 gr",
    ing:[["arroz bomba carraspara","60 gr"],["jitomate saladet","60 gr"],["pure de tomate","20 ml"],["crema para batir lyncott","60 ml"],["juice de rabo de res","60 ml"],["sal fina","1 pizca"],["mantequilla","15 gr"]],
    proc:["ARROZ: el arroz se coloca en un coludo con 1.5 partes de agua, 6 min a fuego alto y posteriormente a fuego minimo por 12 min mas, se apaga y se deja reposar por 5 min, pasado este tiempo se desmolda y se extiende para enfriar como resultado nos da una porcion de 100 gr de arroz cocido",
          "PURE DE TOMATE ROJO: aqui unicamente se licua el jitomate saladet con el pure de tomate sazonado y se reserva en frio para la preparacion final",
          "ARROZ MELOSO: colocar un sarten a fuego medio bajo y derretir la mantequilla, agregas el arroz a que se impregne de la mantequilla (tome un color amarillento) y comenzamos agregando el pure de tomate hasta que este cambie de color a un tono oscuro, seguimos con el juice y al final la crema, subimos a fuego medio alto para que se incorporen bien los sabores y reduzca un poco, rectificar sal y agregar una pizca en caso de ser necesario"]},
  ru:{title:"КРАСНЫЙ СЛИВОЧНЫЙ РИС", yield:"Выход: 1 порция 190 г",
    ing:[["рис бомба (карнароли)","60 г"],["томат саладет","60 г"],["томатное пюре","20 мл"],["сливки для взбивания (Lyncott)","60 мл"],["джус из бычьего хвоста","60 мл"],["соль мелкая","1 щепотка"],["сливочное масло","15 г"]],
    proc:["РИС: варить в кастрюле с 1,5 частями воды: 6 минут на сильном огне, затем 12 минут на минимальном. Снять с огня и дать настояться 5 минут, затем выложить и остудить в расстеленном виде. Выход — порция 100 г варёного риса.",
          "КРАСНОЕ ТОМАТНОЕ ПЮРЕ: пробить блендером томат саладет с приправленным томатным пюре, охладить и убрать в холод для финальной сборки.",
          "СЛИВОЧНЫЙ РИС: на среднем-низком огне растопить сливочное масло, добавить рис и прогреть до лёгкого золотистого цвета. Добавлять томатное пюре, пока цвет не станет тёмным, затем джус и в конце сливки. Увеличить огонь до средне-сильного, чтобы вкусы соединились и соус слегка уварился. Довести до вкуса солью при необходимости."]}
},
{
  id:"focaccia-arugula",
  es:{title:"FOCACCIA DE ARUGULA", yield:"rendimiento 4 porciones",
    ing:[["harina de trigo","250 gr"],["arugula","25 gr"],["levadura en polvo","2.5 gr"],["miel","10 ml"],["aceite de olivo","7.5 ml"],["agua","200 ml"],["sal fina","5 gr"]],
    proc:["Licuar la arugula con el agua y agregar a la harina con los demas ingredientes revolviendo suavemente para dejar reposar la autolisis, pasado el tiempo de reposo se realizan varios pliegues hasta que no se pegue en las manos, colocar en una charola y extender con las manos, hornear a 180°c por unos 20 min en calor seco y cortar en porciones"]},
  ru:{title:"ФОКАЧЧА С РУККОЛОЙ", yield:"Выход: 4 порции",
    ing:[["пшеничная мука","250 г"],["руккола","25 г"],["сухие дрожжи","2.5 г"],["мёд","10 мл"],["оливковое масло","7.5 мл"],["вода","200 мл"],["соль мелкая","5 г"]],
    proc:["Пробить блендером рукколу с водой и добавить к муке вместе с остальными ингредиентами, аккуратно перемешать и оставить для автолиза. После времени отдыха выполнить несколько складываний теста, пока оно не перестанет липнуть к рукам. Выложить на противень, растянуть руками и выпекать при 180°C около 20 минут (сухой жар). Нарезать на порции."]}
},
{
  id:"juice-rabo",
  es:{title:"FONDO OSCURO DE RABO DE RES", yield:"",
    ing:[["rabo de res","5 kg"],["zanahoria","1 kg"],["cebolla blanca","1 kg"],["apio","1 kg"],["vino tinto","300 ml"],["mantequilla","165 gr"]],
    proc:["Hervir el rabo de res durante 3 hrs, retirar toda la carne de los huesos y en una bandeja colocar los huesos con los vegetales cortados y 150 ml de vino tinto al horno por 4 hrs a 180°c en calor seco ventilador 3",
          "Al sacar se usan los otros 150 ml de vino para desglasar la charola y reducir en 8 litros de agua a fuego bajo sin que hierva por 24 hrs y se cuela con el colador fino y se enfria a temperatura ambiente y se conserva en congelador hasta separar la grasa",
          "Esta se retira y el caldo se liga con mantequilla para obtener el juice"]},
  ru:{title:"ТЁМНЫЙ БУЛЬОН-ДЖУС ИЗ БЫЧЬЕГО ХВОСТА", yield:"",
    ing:[["бычий хвост","5 кг"],["морковь","1 кг"],["белый лук","1 кг"],["сельдерей","1 кг"],["красное вино","300 мл"],["сливочное масло","165 г"]],
    proc:["Отварить бычий хвост в течение 3 часов, отделить всё мясо от костей. На противень выложить кости с нарезанными овощами и 150 мл красного вина, запекать в духовке 4 часа при 180°C (сухой жар, вентилятор 3).",
          "После запекания деглазировать противень оставшимися 150 мл вина и переложить всё в 8 литров воды. Томить на слабом огне, не доводя до кипения, 24 часа, процедить через мелкое сито, остудить до комнатной температуры и убрать в морозильник для отделения жира.",
          "Жир снять, а бульон загустить сливочным маслом (монтировать) для получения джуса."]}
},
{
  id:"relleno-canelon",
  es:{title:"RELLENO DE CANELON", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"НАЧИНКА ДЛЯ КАННЕЛЛОНИ", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"pulpo-cocido",
  es:{title:"PULPO COCIDO", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"ОТВАРНОЙ ОСЬМИНОГ", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"salsa-bearnesa",
  es:{title:"SALSA BEARNESA", yield:"",
    ing:[["mantequilla clarificada","700 ml"],["yemas de huevo","10 pzas"],["vinagre de vino blanco","120 ml"],["estragon","32 gr"],["echalotes","2 pzas"],["pimienta negra","5 gr"],["sal","según requiera"],["vino blanco","120 ml"]],
    proc:["A la mantequilla clarificada se agrega el vinagre de vino, el vino blanco, echalote y la pimienta negra recien molida reduciendo a la mitad",
          "En un bowl con un dedo de agua caliente en baño maria, un segundo bowl con las 10 yemas, la reduccion y batir durante 5 min",
          "Incorporar la mantequilla en forma de hilo hasta terminarla con batido constante, finalmente se agrega el estragon finamente picado, mantener a temperatura ambiente"]},
  ru:{title:"СОУС БЕАРНЕЗ", yield:"",
    ing:[["топлёное масло","700 мл"],["яичные желтки","10 шт."],["белый винный уксус","120 мл"],["эстрагон","32 г"],["эшалот","2 шт."],["чёрный перец","5 г"],["соль","по вкусу"],["белое вино","120 мл"]],
    proc:["В топлёное масло добавить винный уксус, белое вино, эшалот и свежемолотый чёрный перец, уварить наполовину.",
          "В миске на водяной бане (с небольшим количеством горячей воды) во второй миске взбить 10 желтков с редукцией в течение 5 минут.",
          "Вливать масло тонкой струйкой при постоянном взбивании до полного соединения, в конце добавить мелко нарезанный эстрагон. Хранить при комнатной температуре."]}
},
{
  id:"bilbaina",
  es:{title:"BILBAINA PICANTE", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"БИЛЬБАИНСКИЙ ОСТРЫЙ СОУС", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"minonete",
  es:{title:"MIÑONETE", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"МИНЬОНЕТ", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"bizcocho-vainilla",
  es:{title:"BIZCOCHO DE VAINILLA", yield:"10 porciones",
    ing:[["huevo entero","4 pzas"],["clara de huevo","2 claras"],["azucar","60 gr"],["harina de trigo","60 gr"],["leche entera","60 gr"],["escencia de vainilla","10 ml"],["polvo para hornear","10 gr"],["jugo de limon","10 ml"]],
    proc:["Se separan las claras y las yemas, en el bowl de la batidora preparar un merengue con las claras, el jugo de limon y el azucar en forma de lluvia hasta tener picos firmes",
          "Aparte calentar 80 ml de aceite vegetal a unos 50°c y vaciar sobre la harina, mezclar suavemente, agregar la leche y continuar mezclando, por ultimo se agregan las yemas y el polvo para hornear",
          "En esta mezcla se coloca el 20% del merengue y se incorpora de manera envolvente hasta quedar parejo, despues esta mezcla se agrega al resto del merengue y nuevamente de manera envolvente para no perder volumen",
          "Para finalizar se engrasan ligeramente los moldes y se llenan hasta 3/4 partes, el resto va a una bandeja extendida, hornear a 150°c por 24 min con 100% humedad y ventilador 3"]},
  ru:{title:"ВАНИЛЬНЫЙ БИСКВИТ", yield:"10 порций",
    ing:[["целое яйцо","4 шт."],["яичный белок","2 шт."],["сахар","60 г"],["пшеничная мука","60 г"],["цельное молоко","60 г"],["ванильный экстракт","10 мл"],["разрыхлитель","10 г"],["лимонный сок","10 мл"]],
    proc:["Отделить белки от желтков. В чаше миксера взбить безе из белков, лимонного сока и сахара, всыпаемого дождём, до устойчивых пиков.",
          "Отдельно нагреть 80 мл растительного масла до ~50°C и влить в муку, аккуратно перемешать, добавить молоко и продолжить смешивание. В конце добавить желтки и разрыхлитель.",
          "В эту смесь ввести 20% безе, аккуратно перемешивая складывающими движениями до однородности, затем полученную массу переложить в оставшееся безе, также складывающими движениями, сохраняя объём.",
          "Слегка смазать формы и заполнить на 3/4, остаток вылить на противень тонким слоем. Выпекать при 150°C 24 минуты, влажность 100%, вентилятор 3."]}
},
{
  id:"betun-malvavisco",
  es:{title:"MARSHMELLOW FLUFF", yield:"",
    ing:[["grenetina","60 gr"],["azucar","200 gr"],["agua","400 ml"]],
    proc:["Hidratar la grenetina en 200 ml de agua y reservar en el bowl de la batidora, a fuego medio hacer un jarabe con los 250 gr de azucar y los 150 ml de agua restante hasta que hierva",
          "Se pone a batir la grenetina a velocidad media hasta que levante un poco y se agrega el jarabe caliente en forma de hilo batiendo a velocidad alta hasta que se enfrie completamente"]},
  ru:{title:"КРЕМ-СУФЛЕ «МАРШМЕЛЛОУ»", yield:"",
    ing:[["желатин","60 г"],["сахар","200 г"],["вода","400 мл"]],
    proc:["Замочить желатин в 200 мл воды и отставить в чашу миксера. На среднем огне сварить сироп из 250 г сахара и оставшихся 150 мл воды до кипения.",
          "Взбить желатин на средней скорости, пока не начнёт слегка подниматься, затем влить горячий сироп тонкой струйкой при постоянном взбивании. Взбивать на высокой скорости до полного остывания."]}
},
{
  id:"jalea-fresa",
  es:{title:"GEL DE FRESA", yield:"",
    ing:[["fresa natural","1 kg"],["azucar","150 gr"],["glucosa","100 gr"],["grenetina","40 gr"],["agua","según requiera"]],
    proc:["Tomar 500 gr de fresa y retirarles el rabillo, colocar a hervir con 200 ml de agua, la glucosa y el azucar durante 5 min, dejar enfriar y licuar",
          "Regresar al fuego a flama baja y agregar la grenetina hidratada hasta disolver completamente, dejar enfriar por unas 2 hrs",
          "Ya cuajada la grenetina procesar con el turbo de mano agregando los 500 grs de fresa restante y agua suficiente para integrar hasta obtener un gel"]},
  ru:{title:"КЛУБНИЧНОЕ ЖЕЛЕ", yield:"",
    ing:[["свежая клубника","1 кг"],["сахар","150 г"],["глюкозный сироп","100 г"],["желатин","40 г"],["вода","по необходимости"]],
    proc:["Взять 500 г клубники, удалить плодоножки, отварить с 200 мл воды, глюкозой и сахаром в течение 5 минут, остудить и пробить блендером.",
          "Вернуть на слабый огонь и добавить замоченный желатин, полностью растворив. Остудить около 2 часов.",
          "После застывания пробить погружным блендером вместе с оставшимися 500 г свежей клубники и достаточным количеством воды до получения консистенции геля."]}
},
{
  id:"porkbelly",
  es:{title:"PORK BELLY PRECOCIDO", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"ОТВАРНАЯ СВИНАЯ ГРУДИНКА (ПОРК-БЕЛЛИ)", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"mantequilla-perejil",
  es:{title:"MANTEQUILLA DE SERVICIO", yield:"",
    ing:[["mantequilla","250 gr"],["ajo","50 gr"],["perejil","25 gr"]],
    proc:["Confitar el ajo en la mantequilla clarificada a fuego muy bajo por unos 30 min aproximadamente, retirar del fuego y vaciar en los moldes con el perejil picado",
          "Dejar en refrigeracion hasta que solidifique y envolver individualmente para conservacion"]},
  ru:{title:"СЛИВОЧНОЕ МАСЛО С ЧЕСНОКОМ И ПЕТРУШКОЙ", yield:"",
    ing:[["сливочное масло","250 г"],["чеснок","50 г"],["петрушка","25 г"]],
    proc:["Конфи́т чеснок в топлёном масле на очень слабом огне около 30 минут, снять с огня и разлить по формам с нарезанной петрушкой.",
          "Убрать в холодильник до застывания, затем упаковать порционно для хранения."]}
},
{
  id:"valentina",
  es:{title:"VALENTINA CASERA", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"ДОМАШНЯЯ ВАЛЕНТИНА (ОСТРЫЙ СОУС)", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"cremoso-aguacate",
  es:{title:"CREMOSO DE AGUACATE", yield:"rendimiento 600 gr",
    ing:[["pulpa de aguacate","425 gr"],["chile serrano","50 gr"],["cilantro","10 gr"],["hinojo","10 gr"],["crema para batir lyncott","120 gr"],["queso crema","120 gr"],["jugo de limon","30 ml"],["sal","10 gr"]],
    proc:["Procesar o licuar todos los ingredientes hasta incorporar de manera homogenea, rectificar punto de sal al final"],
    extra:{title:"PICO DE GALLO", ing:[["jitomate saladet","200 gr"],["cebolla blanca","120 gr"],["aceite olivo","10 ml"],["jugo de limon","10 ml"],["sal","2 gr"]],
      proc:["Picar el jitomate y la cebolla en brunoisse y mezclar en un bowl con el aceite y jugo de limon, rectificar el punto de sal al final"]}},
  ru:{title:"КРЕМ ИЗ АВОКАДО", yield:"Крем — выход 600 г",
    ing:[["мякоть авокадо","425 г"],["перец чили серрано","50 г"],["кинза","10 г"],["фенхель","10 г"],["сливки для взбивания (Lyncott)","120 г"],["сливочный сыр","120 г"],["лимонный сок","30 мл"],["соль","10 г"]],
    proc:["Пробить или измельчить все ингредиенты до однородной массы, довести до вкуса солью в конце."],
    extra:{title:"ПИКО ДЕ ГАЛЬО (для сопровождения)", ing:[["томат саладет","200 г"],["белый лук","120 г"],["оливковое масло","10 мл"],["лимонный сок","10 мл"],["соль","2 г"]],
      proc:["Нарезать томат и лук мелким кубиком (брюнуаз), смешать в миске с маслом и лимонным соком, довести до вкуса солью в конце."]}}
},
{
  id:"macha-morita",
  es:{title:"MACHA DE MORITA Y MAPLE", yield:"", ing:[], proc:[], empty:true},
  ru:{title:"СОУС «МАЧА» ИЗ ЧИЛИ МОРИТА И КЛЕНОВОГО СИРОПА", yield:"", ing:[], proc:[], empty:true}
},
{
  id:"flan-queso",
  es:{title:"FLAN DE QUESO", yield:"",
    ing:[["huevo entero","3 pzas"],["yemas de huevo","2 pzas"],["escencia de vainilla","10 ml"],["queso crema","190 gr"],["leche entera","300 ml"],["leche para batir","200 ml"],["leche condensada","200 gr"]],
    proc:["En un coludo a fuego bajo colocar la leche entera, crema para batir y la escencia de vainilla, remover poco a poco hasta incorporar sin dejar hervir, llevar a una temperatura de 50-55°c y reservar",
          "En el bowl de la batidora colocar con el globo los huevos, las yemas y la leche condensada a velocidad baja, una vez incorporadas agregar el queso crema y subir a velocidad media",
          "Agregar en tres partes la leche tibia hasta conseguir una mezcla homogenea (mas o menos unos 6 min)",
          "Engrasar ligeramente los moldes a utilizar y colocar una base de caramelo al fondo, tapar y llevar al horno a 100°c con 100% de humedad durante 20 min"]},
  ru:{title:"СЫРНЫЙ ФЛАН", yield:"",
    ing:[["целое яйцо","3 шт."],["яичные желтки","2 шт."],["ванильный экстракт","10 мл"],["сливочный сыр","190 г"],["цельное молоко","300 мл"],["сливки для взбивания","200 мл"],["сгущённое молоко","200 г"]],
    proc:["В кастрюле на слабом огне соединить цельное молоко, сливки и ванильный экстракт, постепенно перемешивая до однородности, не доводя до кипения. Довести до температуры 50–55°C и отставить.",
          "В чаше миксера венчиком взбить яйца, желтки и сгущённое молоко на низкой скорости, затем добавить сливочный сыр и увеличить скорость до средней.",
          "Влить тёплую молочную смесь в три приёма до получения однородной массы (около 6 минут).",
          "Слегка смазать формы, на дно налить карамель, накрыть и выпекать при 100°C с влажностью 100% в течение 20 минут."]}
},
{
  id:"pure-papa",
  es:{title:"PURE DE PAPA", yield:"",
    ing:[["papa blanca","1 kg"],["mantequilla","150 gr"],["leche entera","200 ml"],["sal","10 gr"],["crema lyncott","150 ml"]],
    proc:["Pelar las papas y cortar en cubos medianos, cocer en agua hirviendo durante 20 min o hasta que se puedan atravesar sin resistencia, machacar con el aplasta papas y llevar a una consistencia cremosa con la mantequilla, leche, crema y sal"]},
  ru:{title:"КАРТОФЕЛЬНОЕ ПЮРЕ", yield:"",
    ing:[["белый картофель","1 кг"],["сливочное масло","150 г"],["цельное молоко","200 мл"],["соль","10 г"],["сливки Lyncott","150 мл"]],
    proc:["Очистить картофель, нарезать средним кубиком и отварить в кипящей воде 20 минут (или до мягкости). Размять картофелемялкой, довести до кремовой консистенции с маслом, молоком, сливками и солью."]}
}
],
dishes: [
{
  id:"pan-servicio",
  es:{title:"PAN DE SERVICIO", ing:[["SR","pan brioche de servicio","PZA","1"],["SR","mantequilla de ajo y perejil","PZA","1"],["MP","jitomate rallado","KG","0.045"],["MP","aceite de olivo","OZ","1"],["MP","vinagre balsamico","OZ","1"]],
    proc:["En un plato alargado grande se coloca la pieza de pan brioche, la barra de mantequilla directamente y los complementos (tomate y aceite con balsamico) en sufleras de metal como esta en la foto"]},
  ru:{title:"ХЛЕБ К СТОЛУ", ing:[["ЗГ","бриошь порционная","шт.","1"],["ЗГ","масло с чесноком и петрушкой","шт.","1"],["СМ","томат тёртый","кг","0.045"],["СМ","оливковое масло","унц.","1"],["СМ","бальзамический уксус","унц.","1"]],
    proc:["На продолговатой тарелке разместить бриошь, брусок сливочного масла прямо на тарелке и дополнения (томат и масло с бальзамиком) в металлических соусницах — как показано на фото-эталоне."]}
},
{
  id:"papa-pulpo",
  es:{title:"PAPAS BEARNESA CON PULPO", ing:[["MP","papa blanca","KG","0.1"],["SR","salsa bearnesa","LT","0.12"],["SR","pulpo cocido","KG","0.06"],["MP","sal fina","KG","0.001"],["SR","juice de rabo","LT","0.09"],["MP","cebollin","KG","0.001"],["MP","maicena","KG","0.06"]],
    proc:["Pelar la papa y cortar en cubos medianos (2.5 cm aprox) secar bien y pasar por la maicena, tamizar ligeramente en un colador para quitar el exceso y bajar a fritura profunda por 5 min, dejar escurrir el aceite y aplicar el gr de sal",
          "Colocar en el plato sopero al fondo con el pulpo cortado en laminas delgadas (.5 cm aprox) y mezclar minimamente, se termina bañando con la salsa bearnesa y cebollin picado"]},
  ru:{title:"КАРТОФЕЛЬ «БЕАРНЕЗ» С ОСЬМИНОГОМ", ing:[["СМ","белый картофель","кг","0.1"],["ЗГ","соус беарнез","л","0.12"],["ЗГ","отварной осьминог","кг","0.06"],["СМ","соль мелкая","кг","0.001"],["ЗГ","джус из бычьего хвоста","л","0.09"],["СМ","лук-шнитт","кг","0.001"],["СМ","кукурузный крахмал","кг","0.06"]],
    proc:["Картофель очистить, нарезать средним кубиком (~2,5 см), хорошо обсушить и обвалять в крахмале, слегка просеять через сито от излишков. Обжарить во фритюре 5 минут, дать стечь маслу и посолить.",
          "Выложить в глубокую тарелку основой, сверху тонко нарезанный (~0,5 см) осьминог, слегка перемешать. Полить соусом беарнез и посыпать нарезанным луком-шниттом."]}
},
{
  id:"mejillones",
  es:{title:"MEJILLONES EN BILBAINA PICANTE", ing:[["MP","mejillones","PZA","10"],["SR","bilbaina picante","OZ","5"],["MP","aceite de olivo","OZ","1"],["MP","echalote","KG","0.01"],["MP","perejil","KG","0.005"],["SR","pan brioche rebanado","RBD","3"]],
    proc:["Se precaliente un sarten con el aceite de olivo, sofreir ligeramente el echalote y se agregan de golpe los mejillones, se bañan con la bilbaina salteando constantemente",
          "Se sirven en el plato orejon mediano terminando con perejil fresco encima y 3 rebanadas de brioche tostado"]},
  ru:{title:"МИДИИ ПО-БИЛЬБАЙСКИ (ОСТРЫЕ)", ing:[["СМ","мидии","шт.","10"],["ЗГ","соус «бильбаина» острый","унц.","5"],["СМ","оливковое масло","унц.","1"],["СМ","эшалот","кг","0.01"],["СМ","петрушка","кг","0.005"],["ЗГ","бриошь, нарезанная ломтиками","ломт.","3"]],
    proc:["Разогреть сковороду с оливковым маслом, слегка обжарить эшалот, разом добавить мидии. Полить соусом «бильбаина» и обжаривать при постоянном помешивании.",
          "Подавать на среднем плоском блюде, посыпав свежей петрушкой, с 3 ломтиками поджаренной бриоши."]}
},
{
  id:"ostion",
  es:{title:"OSTION FRESCO", ing:[["MP","ostion fresco","PZA","3"],["SR","miñonete","OZ","0.5"],["MP","limon amarillo","PZA","0.15"],["MP","salsa tabasco","PZA","0.5"]],
    proc:["Abrimos los ostiones y separamos la vianda, con la mamila colocamos miñonete sobre cada uno",
          "Colocamos en las ollas de vidrio con hielo frappe y se sirve acompañado de gajos de limon amarillo y salsa tabasco"]},
  ru:{title:"СВЕЖИЕ УСТРИЦЫ", ing:[["СМ","свежие устрицы","шт.","3"],["ЗГ","миньонет","унц.","0.5"],["СМ","жёлтый лимон","шт.","0.15"],["СМ","соус табаско","шт.","0.5"]],
    proc:["Открыть устрицы, отделив мясо от створки. С помощью пипетки нанести миньонет на каждую устрицу.",
          "Выложить в стеклянные ёмкости на колотый лёд и подать с дольками жёлтого лимона и соусом табаско."]}
},
{
  id:"brocheta-porkbelly",
  es:{title:"BROCHETA DE PORKBELLY CARAMELIZADA", ing:[["SR","porkbelly cocido","KG","0.12"],["SR","glaseado de 5 especias","LT","0.09"],["SR","pure de papa","KG","0.06"],["MP","cebollin picado","KG","0.001"],["MP","azucar refinada","KG","0.1"]],
    proc:["Embrochetamos las lonjas de porkbelly de manera uniforme sobre un pincho de brocheta y glaseamos con brocha por cada lado",
          "Llevamos a la robatayaki con carbon durante unos 4 min aproximadamente glaseando con brocha en cada vuelta que se le de",
          "Aparte en un sarten se coloca el azucar directamente a fuego medio hasta que caramelice, retiramos las brochetas del fuego y cubrimos con el caramelo por ambos lados, dejamos que endurezca por 1-2 min",
          "Servimos en un plato alargado mediano con papel de servicio y pure de papa, terminamos con cebollin picado"]},
  ru:{title:"БРОШЕТ ИЗ КАРАМЕЛИЗИРОВАННОЙ ГРУДИНКИ", ing:[["ЗГ","отварная свиная грудинка","кг","0.12"],["ЗГ","глазурь «пять специй»","л","0.09"],["ЗГ","картофельное пюре","кг","0.06"],["СМ","лук-шнитт, нарезанный","кг","0.001"],["СМ","сахар рафинированный","кг","0.1"]],
    proc:["Ломтики грудинки равномерно нанизать на шпажку, глазировать кистью с каждой стороны.",
          "Готовить на робатаяки (гриле на углях) около 4 минут, продолжая глазировать при каждом переворачивании.",
          "Отдельно на сковороде на среднем огне карамелизировать сахар без добавок. Снять брошеты с огня и покрыть карамелью с обеих сторон, дать затвердеть 1–2 минуты.",
          "Подавать на среднем продолговатом блюде с бумагой для подачи и картофельным пюре, завершить нарезанным луком-шниттом."]}
},
{
  id:"sope-atun",
  es:{title:"SOPE DE ATUN ZARANDEADO", ing:[["SR","salsa zarandeado","OZ","3"],["MP","lamina de lomo de atun","KG","0.08"],["SR","sope de maiz azul","PZA","1"],["SR","frijoles refritos","KG","0.06"],["MP","aguacate","KG","0.1"],["MP","cilantro criollo","KG","0.003"],["MP","queso doble crema chilchota","KG","0.03"],["MP","rabano","KG","0.025"],["MP","hueva de lumpo","KG","0.01"]],
    proc:["El atun laminado se unta con el zarandeado por ambos lados y con el soplete de mano se sella directamente hasta notar ligeras manchas de tatemado, untando zarandeado tres veces",
          "Para montar colocamos el sope de maiz azul en un plato base de acero con papel astronomic, untamos los frijoles, el aguacate laminado (de unos 3mm de grosor) encima la lamina de atun sellado",
          "Se termina con el queso doble crema desmenuzado, el cilantro criollo esparcido, una rosa de rabano laminado al centro y cuatro puntos de hueva de lumpo"]},
  ru:{title:"СОПЕ С ОБОЖЖЁННЫМ ТУНЦОМ ЗАРАНДЕАДО", ing:[["ЗГ","соус «зарандеадо»","унц.","3"],["СМ","пласты филе тунца","кг","0.08"],["ЗГ","сопе из синей кукурузы","шт.","1"],["ЗГ","пюре из фасоли (рефритос)","кг","0.06"],["СМ","авокадо","кг","0.1"],["СМ","кинза криолья","кг","0.003"],["СМ","сыр двойных сливок «чилчота»","кг","0.03"],["СМ","редис","кг","0.025"],["СМ","икра рыбы лумпо","кг","0.01"]],
    proc:["Пласты тунца обмазать соусом зарандеадо с обеих сторон и обжечь ручной горелкой до появления лёгких подпалин, нанося соус трижды.",
          "Для сборки выложить сопе из синей кукурузы на стальную тарелку с бумагой astronomic, намазать фасолевым пюре, тонко нарезанное авокадо (~3 мм), сверху обожжённый тунец.",
          "Посыпать тёртым сыром двойных сливок, кинзой, в центре — «розочку» из тонко нарезанного редиса и четыре точки икры лумпо."]}
},
{
  id:"pollo-frito",
  es:{title:"POLLO FRITO", ing:[["SR","pollo karaage","ORD","1"],["SR","salsa picante casera","OZ","3"],["MP","col blanca","KG","0.1"],["MP","perejil","KG","0.01"],["SR","rub acidulce","KG","0.03"],["SR","aderezo de chimichurri","OZ","2"],["MP","limon amarillo","PZA","0.15"]],
    proc:["Cortamos la col blanca y el perejil en chiffonade y revolvemos con el rub",
          "En el plato ovni se coloca la porcion del pollo frito, la mezcla de col y un ramiqui con la mayonesa, el plato se va acompañado de una maila de salsa casera decorado con ajonjoli garapiñado y un sexto de limon amarillo"]},
  ru:{title:"ЖАРЕНАЯ КУРИЦА (ПОЙО ФРИТО)", ing:[["ЗГ","куриное карааге","порц.","1"],["ЗГ","домашний острый соус","унц.","3"],["СМ","белокочанная капуста","кг","0.1"],["СМ","петрушка","кг","0.01"],["ЗГ","кисло-сладкий раб (приправа)","кг","0.03"],["ЗГ","заправка чимичурри","унц.","2"],["СМ","жёлтый лимон","шт.","0.15"]],
    proc:["Нашинковать капусту и петрушку тонкой соломкой (шифонад) и смешать с рабом.",
          "На овальной тарелке разместить порцию жареной курицы, смесь капусты и рамекин с майонезом. Блюдо дополнить полоской домашнего острого соуса, украсить карамелизированным кунжутом и долькой жёлтого лимона (1/6)."]}
},
{
  id:"focaccia-papada",
  es:{title:"FOCACCIA CON CHICHARRON DE PAPADA", ing:[["SR","pan focaccia de arugula","PZA","1"],["SR","chicharron de papada","KG","0.025"],["SR","cremoso de aguacate","OZ","0.05"],["MP","arugula","KG","0.005"],["MP","espinaca baby","KG","0.005"],["SR","salsa macha de maple","OZ","0.5"],["SR","pico de gallo","KG","0.6"],["MP","flor de pensamiento comestible","PZA","1"]],
    proc:["Colocamos como base el pan focaccia y varios puntos de cremoso de aguacate sobre este, mezclamos la arugula con la espinaca baby",
          "Sobre esta el pico de gallo, la papada de cerdo en lonjas, la salsa macha esparcida en toda la superficie y terminamos con el pensamiento de manera decorativa"]},
  ru:{title:"ФОКАЧЧА С ЧИЧАРРОНОМ ИЗ СВИНОЙ ЩЕКИ", ing:[["ЗГ","фокачча с рукколой","шт.","1"],["ЗГ","чичаррон из свиной щеки","кг","0.025"],["ЗГ","крем из авокадо","унц.","0.05"],["СМ","руккола","кг","0.005"],["СМ","молодой шпинат","кг","0.005"],["ЗГ","соус «мача» с кленовым сиропом","унц.","0.5"],["ЗГ","пико де гальо","кг","0.6"],["СМ","съедобный цветок анютиных глазок","шт.","1"]],
    proc:["Основой выложить фокаччу, нанести несколько точек крема из авокадо. Смешать рукколу с молодым шпинатом.",
          "Выложить сверху пико де гальо, ломтики свиной щеки, соус «мача», распределённый по всей поверхности, и завершить декоративно цветком анютиных глазок."]}
},
{
  id:"rib-eye",
  es:{title:"RIB EYE CANTINERO", ing:[["MP","rib eye 250 gr","PZA","1"],["SR","juice de rabo","OZ","6"],["SR","pure de papa","KG","0.06"],["MP","papa","KG","0.1"],["MP","cebollin","KG","0.001"]],
    proc:["Llevamos el rib eye con un poco de aceite y hojuela de sal a la robatayaki, cuadramos y sacamos cuando este en termino medio",
          "En lo que se cuece la carne la papa se corta en julianas largas y se lleva a fritura profunda a 180°c por 2 minutos aproximadamente",
          "Colocamos el rib eye sobre un plato orejon mediano a manera de cama, bañamos con juice de rabo caliente, una tira de pure de papa en botones y encima las papas fritas, por ultimo terminamos con cebollin picado"]},
  ru:{title:"РИБАЙ «КАНТИНЕРО»", ing:[["СМ","рибай, 250 г","шт.","1"],["ЗГ","джус из бычьего хвоста","унц.","6"],["ЗГ","картофельное пюре","кг","0.06"],["СМ","картофель","кг","0.1"],["СМ","лук-шнитт","кг","0.001"]],
    proc:["Рибай с небольшим количеством масла и хлопьевидной солью отправить на робатаяки, довести до средней прожарки.",
          "Пока готовится мясо, картофель нарезать длинной соломкой и обжарить во фритюре при 180°C около 2 минут.",
          "На среднюю овальную тарелку выложить рибай, полить горячим джусом из бычьего хвоста, добавить полоску картофельного пюре точками и картофель фри сверху. Завершить нарезанным луком-шниттом."]}
},
{
  id:"canelon-rabo",
  es:{title:"CANELON DE RABO", ing:[["MP","pasta de canelon (tubo)","PZA","3"],["SR","relleno de canelon","KG","0.15"],["SR","salsa bechamel","OZ","4"],["MP","cebollin","KG","0.001"],["MP","ralladura de limon amarillo","KG","0.001"],["SR","juice de rabo","OZ","4"]],
    proc:["Rellenamos los tubos de canelon con la pasta de rabo y champiñones en partes iguales cada uno, y reservamos en un plato orejon chico",
          "En un coludo o sarten aparte calentamos el juice y la bechamel por separado a una temperatura aproximada de 60°c",
          "Colocamos el juice como espejo base y la bechamel para bañar cada canelon, terminando con el cebollin y la ralladura por encima"]},
  ru:{title:"КАННЕЛЛОНИ ИЗ БЫЧЬЕГО ХВОСТА", ing:[["СМ","трубочки каннеллони (сухая паста)","шт.","3"],["ЗГ","начинка для каннеллони","кг","0.15"],["ЗГ","соус бешамель","унц.","4"],["СМ","лук-шнитт","кг","0.001"],["СМ","цедра жёлтого лимона","кг","0.001"],["ЗГ","джус из бычьего хвоста","унц.","4"]],
    proc:["Наполнить трубочки каннеллони начинкой из бычьего хвоста с грибами в равных пропорциях, выложить на маленькое овальное блюдо.",
          "В отдельных сотейниках подогреть джус и бешамель примерно до 60°C.",
          "Разлить джус по тарелке как зеркальную основу, полить каждый каннеллони соусом бешамель, завершить луком-шниттом и цедрой лимона сверху."]}
},
{
  id:"arroz-mar-tierra",
  es:{title:"ARROZ MELOSO MAR Y TIERRA", ing:[["SR","arroz rojo cremoso","ORD","1"],["SR","pulpo cocido","KG","0.1"],["MP","chistorra","KG","0.06"],["SR","mayonesa de chimichurri","OZ","1"],["MP","cilantro criollo","KG","0.003"]],
    proc:["Cortamos el pulpo en laminas de 3 mm de grueso aproximadamente y la chistorra porcionada a la mitad",
          "En un plato orejon mediano se coloca el arroz preparado de base y acomodamos el pulpo y la chistorra cubriendo la mayor parte de la superficie del arroz",
          "Llevamos a la salamandra por 1 min a llama directa, bajamos y terminamos esparciendo puntos de mayonesa y pizcas de cilantro preferentemente con flor"]},
  ru:{title:"СЛИВОЧНЫЙ РИС «МОРЕ И СУША»", ing:[["ЗГ","красный сливочный рис","порц.","1"],["ЗГ","отварной осьминог","кг","0.1"],["СМ","чисторра (испанская колбаса)","кг","0.06"],["ЗГ","майонез чимичурри","унц.","1"],["СМ","кинза криолья","кг","0.003"]],
    proc:["Осьминога нарезать пластинами толщиной ~3 мм, чисторру разрезать пополам.",
          "На средней овальной тарелке выложить готовый рис основой, сверху разместить осьминога и чисторру, покрывая большую часть поверхности риса.",
          "Отправить под саламандр на открытом огне на 1 минуту, снять и завершить точками майонеза и щепотками кинзы, желательно с цветком."]}
},
{
  id:"ensalada-tomates",
  es:{title:"ENSALADA DE TOMATES Y ARUGULA", ing:[["MP","tomate heirloom","KG","0.125"],["MP","jitomate cherry","KG","0.075"],["MP","arugula","KG","0.01"],["MP","aceite de olivo","OZ","1"],["MP","vinagre balsamico","OZ","0.5"]],
    proc:[], note:true},
  ru:{title:"САЛАТ ИЗ ТОМАТОВ С РУККОЛОЙ", ing:[["СМ","томат «эрлум»","кг","0.125"],["СМ","черри-томаты","кг","0.075"],["СМ","руккола","кг","0.01"],["СМ","оливковое масло","унц.","1"],["СМ","бальзамический уксус","унц.","0.5"]],
    proc:[], note:true}
},
{
  id:"flan",
  es:{title:"FLAN CREMOSO", ing:[["SR","flan cremoso","PZA","1"],["SR","caramelo de cerveza","LT","0.06"],["MP","queso doble crema torito","KG","0.025"]],
    proc:["En una copa de acero desmoldar un flan, bañar con el caramelo de cerveza y coronar con queso torito rallado"]},
  ru:{title:"СЛИВОЧНЫЙ ФЛАН", ing:[["ЗГ","сливочный флан","шт.","1"],["ЗГ","пивная карамель","л","0.06"],["СМ","сыр двойных сливок «торито»","кг","0.025"]],
    proc:["В стальной креманке выложить флан из формы, полить пивной карамелью и увенчать тёртым сыром «торито»."]}
},
{
  id:"gaznate",
  es:{title:"GAZNATE DE QUESO MADURO Y ATE", ing:[["MP","lamina de wonton","PZA","1"],["SR","relleno de queso maduro","KG","0.09"],["MP","ate de guayaba","KG","0.04"]],
    proc:["En un cilindro metalico previamente engrasado enrollar la lamina de wonton y llevar a fritura profunda a 180°c por aproximadamente 4 min o hasta que dore completamente y se separe del cilindro",
          "Dejar reposar y una vez frio colocar las barras de ate en un lado para terminar rellenando con la crema de queso, servir en un plato alargado chico"]},
  ru:{title:"ГАЗНАТЕ С ВЫДЕРЖАННЫМ СЫРОМ И АТЕ", ing:[["СМ","лист вонтон","шт.","1"],["ЗГ","начинка из выдержанного сыра","кг","0.09"],["СМ","ате (фруктовая паста) из гуавы","кг","0.04"]],
    proc:["На заранее смазанном металлическом цилиндре обернуть лист вонтона и обжарить во фритюре при 180°C около 4 минут или до полного золотистого цвета, пока не отделится от цилиндра.",
          "Дать остыть, затем с одной стороны выложить брусочки ате гуавы и заполнить кремом из выдержанного сыра. Подавать на маленькой продолговатой тарелке."]}
},
{
  id:"gansito",
  es:{title:"LITTLE GOOSE", ing:[["SR","bizcocho suave","PZA","1"],["SR","gel de fresa natural","KG","0.06"],["SR","betun de marshmellow","KG","0.045"],["MP","chocolate cobertura","KG","0.07"]],
    proc:["Se coloca la base del bizcocho (la pieza consta de una parte mas gruesa y una delgada) cubrimos con el gel de fresa en forma de botones",
          "Tapamos con la parte delgada y bañamos de chocolate cobertura, una vez frio decorar con el betun en forma de cordel continuo horizontal"]},
  ru:{title:"«ГАНСИТО» (ДЕСЕРТ)", ing:[["ЗГ","мягкий бисквит","шт.","1"],["ЗГ","клубничное желе","кг","0.06"],["ЗГ","крем-суфле «маршмеллоу»","кг","0.045"],["СМ","шоколадная глазурь","кг","0.07"]],
    proc:["Выложить основу бисквита (изделие состоит из более толстой и более тонкой части), покрыть клубничным желе точками.",
          "Накрыть тонкой частью и полить шоколадной глазурью. После остывания декорировать кремом «маршмеллоу» непрерывной горизонтальной полосой в форме шнура."]}
}
]
};

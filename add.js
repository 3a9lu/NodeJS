// load("D:\\Node\\add.js")
db.posts.insertMany(
[
	{
		"title": "Усадьба Мелихово: как был устроен быт в семье Антона Чехова.",
		"author": "Инна Докучаева",
		"text": "Чеховы прожили в селе Мелихово Серпуховского уезда Московской губернии почти семь лет. Они купили здесь усадьбу, привели ее в порядок, возвели несколько хозяйственных построек и флигель, разбили сад, огород и два пруда. Все в семье рано вставали, много работали и с радушием принимали гостей. Антон Чехов здесь трудился наравне с домочадцами, лечил больных и успел написать 42 произведения, в том числе и свою знаменитую пьесу «Чайка».",
		"tag": "Писатель",
		review: [{
		  "name": "Иван",
		  "mark": "10",
		  "reviewMessage": "Интересно и познавательно!"
		}],
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	
	{
		"title": "Как русские писатели проигрывались в карты?",
		"author": "Татьяна Григорьева",
		"text": "Карты появились в России в XVI веке — и уже при Петре I издали первые законы для борьбы с игроманами. В начале XIX века князь Петр Вяземский писал: «Нигде карты не вошли в такое употребление, как у нас: в русской жизни карты одна из непреложных и неизбежных стихий». Рассказываем, кто из русских писателей проигрывал и выигрывал баснословные деньги, собственные произведения и даже жену.",
		"tag": "Писатель",
		review: [{
		  "name": "Дмитрий",
		  "mark": "4",
		  "reviewMessage": "Мало информации."
		}],
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	
	{
		"title": "Технология строительства каркасного дома с плоской крышей",
		"author": "Сергей Соловьёв",
		"text": "Частное каркасное строительство дает возможность возвести даже многоэтажный дом за небольшой строительный бюджет. Такие дома сегодня очень популярны. Но каркасный дом с плоской крышей – встречается сегодня все же редко. Хотя из всех каркасных строений он самый дешевый в плане затрачиваемых материалов. Поэтому в статье рассмотрим технологию сооружения каркасного дома, покрытого плоской кровлей, расскажем о материалах, из которых он возводится, его преимуществах и недостатках.",
		"tag": "Строительство",
		review: [{
		  "name": "Роман",
		  "mark": "10",
		  "reviewMessage": "Очень много нужной информации, было интересно!"
		}],
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	
	{
		"title": "Почему бой Бивола и Альвареса — «Рокки» нашего времени?",
		"author": "Андрей Баздрев",
		"text": "Поединок Дмитрия Бивола против Сауля Альвареса — главный бой весны в боксе. И не потому, что других нет, а Диллиан Уайт оказался слишком легкой добычей для Тайсона Фьюри.",
		"tag": "Спорт",
		review: [{
		  "name": "Семён",
		  "mark": "1",
		  "reviewMessage": "Не согласен с мнением автора."
		}],
		"createdAt": new Date(),
		"updatedAt": new Date()
	},
	
	{
		"title": "Тренды мужской одежды 2022-2023: топовые образы для мужчин",
		"author": "Евгения Науменко",
		"text": "Мужская мода – не менее важная область фэшн-индустрии, чем мода для женщин во всех ее проявлениях. Современный мир моды предлагает мужчинам очень интересные тренды и новые веяния, что помогут представителям сильного пола выглядеть всегда на «отлично».",
		"tag": "Мода",
		review: [{
		  "name": "Игорь",
		  "mark": "1",
		  "reviewMessage": "Бред какой-то."
		}],
		"createdAt": new Date(),
		"updatedAt": new Date()
	}
])
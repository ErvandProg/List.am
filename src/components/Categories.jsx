import React from 'react';

import Subcategories from './Subcategories';
import BusinessPages from './BusinessPages';
import CarService from './CarService';
import SaleOfApartments from './SaleOfApartments';
import ApartmentsForRent from './ApartmentsForRent';
import Urgently from './Urgently';
import CommercialRealEstateAndOfficeLeasing from './CommercialRealEstateAndOfficeLeasing';
import CarRental from './CarRental';

let dataBase = {
	subcategories: [
		{
			text: "Հաշվապահի հաստիքներ",
			color: "black",
			backgroundColor: "#D3D5E2",
			img: "https://sa.list.am/242.png"
		},
		{
			text: "List.am-ում անվտանգություն",
			color: "white",
			backgroundColor: "#E57D15",
			img: "https://sa.list.am/221.png"
		},
		{
			text: "Տղամարդկանց կոշիկներ",
			color: "black",
			backgroundColor: "#DFD8CE",
			img: "https://sa.list.am/280.png"
		},
		{
			text: "Օրավարձով բնակարաններ",
			color: "white",
			backgroundColor: "#009DCF",
			img: "https://sa.list.am/214.png"
		},
		{
			text: "Ամանորյա պարագաներ",
			color: "white",
			backgroundColor: "#FB7F78",
			img: "https://sa.list.am/272.png"
		},
		{
			text: "Գանձապահի հաստիքներ",
			color: "white",
			backgroundColor: "#7F7F7F",
			img: "https://sa.list.am/224.png"
		},
		{
			text: "Էլեկտրական մեքենաներ",
			color: "white",
			backgroundColor: "#006AFF",
			img: "https://sa.list.am/215.png"
		},
		{
			text: "Արտադրված է Հայաստանում",
			color: "white",
			backgroundColor: "#93BBEE",
			img: "https://sa.list.am/220.png"
		}
	],
	businessPages: [
		{
			img: "https://upa.list.am/4143.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/14659.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/15100.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/14024.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/10326.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/13416.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/2314.jpg",
			// stars: "5",
		},
		{
			img: "https://upa.list.am/13570.jpg",
			// stars: "5",
		}
	],
	carService: [
		{
			img: "//s.list.am/h/272/76379272.webp",
			price: "$29,500",
			text: "Lexus RX, 3.5 լ, 2013 թ.",
			info: "2013 թ., 89,000 կմ, Բենզին"
		},
		{
			img: "//s.list.am/h/176/76048176.webp",
			price: "$44,000",
			text: "Tesla Model Y, էլեկտրական, լիաքարշ, 2020 թ.",
			info: "2020 թ., 21,000 կմ, էլեկտրական"
		},
		{
			img: "//s.list.am/h/560/76416560.webp",
			price: "$9,800",
			text: "Hyundai Elantra, 1.8 լ, 2012 թ., գազ",
			info: "2012 թ., 128,000 մղոն, Բենզին"
		},
		{
			img: "//s.list.am/h/163/76803163.webp",
			price: "$55,000",
			text: "Toyota Highlander, 3.5 լ, լիաքարշ, 2021 թ.",
			info: "2021 թ., 32,500 կմ, Բենզին"
		},
		{
			img: "//s.list.am/h/522/76834522.webp",
			price: "$20,000",
			text: "BMW 3 Series, 2.0 լ, 2017 թ.",
			info: "2017 թ., 43,000 մղոն, Բենզին"
		},
		{
			img: "//s.list.am/h/236/77147236.webp",
			price: "$35,000",
			text: "Kia K5, 1.6 լ, 2023 թ.",
			info: "2023 թ., 2000 մղոն, Բենզին"
		}
	],
	saleOfApartments: [
		{
			img: "https://s.list.am/h/384/72098384.webp",
			price: "$225,000",
			text: "3 սենյականոց բնակարան նորակառույց շենքում Գարեգին Հովսեփյան փողոցում, 90 ք.մ., 2 սանհանգույց",
			info: "3 սեն., 90 ք.մ., 1/7 հարկ"
		},
		{
			img: "https://s.list.am/h/055/66142055.webp",
			price: "$125,000",
			text: "2 սենյականոց բնակարան Միքայել Նալբանդյանի փողոցում, 56 ք.մ., 2 սանհանգույց, բարձր առաստաղներ",
			info: "2 սեն., 56 ք.մ., 2/3 հարկ"
		},
		{
			img: "https://s.list.am/h/298/76779298.webp",
			price: "$155,000",
			text: "3 սենյականոց բնակարան Գյուլբենկյան փողոցում, 67 ք.մ., 2 սանհանգույց, 1/14 հարկ, մասնակի վերանորոգում",
			info: "3 սեն., 67 ք.մ., 1/14 հարկ"
		},
		{
			img: "https://s.list.am/h/601/75198601.webp",
			price: "$94,000",
			text: "1 սենյականոց բնակարան Գյուլբենկյան փողոցում, 30 ք.մ., նախավերջին հարկ",
			info: "1 սեն., 30 ք.մ., 4/5 հարկ"
		},
		{
			img: "https://s.list.am/h/190/74881190.webp",
			price: "$130,000",
			text: "3 սենյականոց բնակարան Գյուլբենկյան փողոցում, 82 ք.մ., մի քանի պատշգամբ, 5/14 հարկ",
			info: "3 սեն., 82 ք.մ., 5/14 հարկ"
		},
		{
			img: "https://s.list.am/h/675/76482675.webp",
			price: "$245,000",
			text: "2 սենյականոց բնակարան Թումանյան փողոցում, 75 ք.մ., բարձր առաստաղներ, 3/5 հարկ, կոսմետիկ վերանորոգում",
			info: "2 սեն., 75 ք.մ., 3/5 հարկ"
		},
		{
			img: "https://s.list.am/h/228/76255228.webp",
			price: "$128,000",
			text: "2 սենյականոց բնակարան Տիգրան Մեծի պողոտայում, 37 ք.մ., բարձր առաստաղներ, կապիտալ վերանորոգված",
			info: "2 սեն., 37 ք.մ., 4/4 հարկ"
		},
		{
			img: "https://s.list.am/h/232/75026232.webp",
			price: "$235,000",
			text: "2 սենյականոց բնակարան Վարդանանց փողոցում, 51 ք.մ., 1/9 հարկ, դիզայներական ոճով վերանորոգված",
			info: "3 սեն., 101 ք.մ., 12/13 հարկ"
		},
		{
			img: "https://s.list.am/h/055/77129055.webp",
			price: "$153,000",
			text: "2 սենյականոց բնակարան նորակառույց շենքում Շիրակի փողոցում, 40 ք.մ., բարձր առաստաղներ, 1/2 հարկ",
			info: "2 սեն., 51 ք.մ., 1/9 հարկ"
		},
		{
			img: "https://s.list.am/h/365/76218365.webp",
			price: "$48,200",
			text: "4 սենյականոց բնակարան նորակառույց շենքում Մոնթե Մելքոնյան փողոցում, 121 ք.մ., 2 սանհանգույց",
			info: "2 սեն., 40 ք.մ., 1/2 հարկ"
		},
		{
			img: "https://s.list.am/h/704/77015704.webp",
			price: "$210,000",
			text: "3 սենյականոց բնակարան նորակառույց շենքում, Komitas Ave, 113 ք.մ., 2 սանհանգույց, մի քանի պատշգամբ",
			info: "4 սեն., 121 ք.մ., 3/16 հարկ"
		},
		{
			img: "https://s.list.am/h/835/77022835.webp",
			price: "$250,000",
			text: "2 սենյականոց բնակարան Ռուբինյանց փողոցում, 32 ք.մ., 2/5 հարկ, կապիտալ վերանորոգված, քարե շենք",
			info: "3 սեն., 113 ք.մ., 4/13 հարկ"
		},
		{
			img: "https://s.list.am/h/417/76965417.webp",
			price: "$49,000",
			text: "2 սենյականոց բնակարան Ռուբինյանց փողոցում, 32 ք.մ., 2/5 հարկ, կապիտալ վերանորոգված, քարե շենք",
			info: "2 սեն., 32 ք.մ., 2/5 հարկ"
		},
		{
			img: "https://s.list.am/h/841/76268841.webp",
			price: "$85,000",
			text: "3 սենյականոց բնակարան Արտաշիսյան փողոցում, 75 ք.մ., քարե շենք",
			info: "3 սեն., 75 ք.մ., 4/4 հարկ"
		},
		{
			img: "https://s.list.am/h/867/69244867.webp",
			price: "$230,000",
			text: "3 սենյականոց բնակարան Ամիրյան փողոցում, 70 ք.մ., 1/9 հարկ, կապիտալ վերանորոգված",
			info: "3 սեն., 70 ք.մ., 1/9 հարկ"
		},
		{
			img: "https://s.list.am/h/372/75794372.webp",
			price: "$105,000",
			text: "1 սենյականոց բնակարան նորակառույց շենքում Արգիշտի փողոցում, 36 ք.մ., բարձր առաստաղներ, 11/14 հարկ",
			info: "1 սեն., 36 ք.մ., 11/14 հարկ"
		},
		{
			img: "https://s.list.am/h/663/76610663.webp",
			price: "$215,000",
			text: "2 սենյականոց բնակարան Սարյանի փողոցում, 60 ք.մ., 2/5 հարկ, դիզայներական ոճով վերանորոգված, քարե շենք",
			info: "2 սեն., 60 ք.մ., 2/5 հարկ"
		},
		{
			img: "https://s.list.am/h/515/75915515.webp",
			price: "$100,000",
			text: "2 սենյականոց բնակարան, Մարգարյան 2-րդ նրբանցք, 64 ք.մ., դիզայներական ոճով վերանորոգված, քարե շենք",
			info: "2 սեն., 64 ք.մ., 5/5 հարկ"
		}
	],
	apartmentsForRent: [
		{
			img: "https://s.list.am/h/384/72098384.webp",
			price: "$225,000",
			text: "3 սենյականոց բնակարան նորակառույց շենքում Գարեգին Հովսեփյան փողոցում, 90 ք.մ., 2 սանհանգույց",
			info: "3 սեն., 90 ք.մ., 1/7 հարկ"
		},
		{
			img: "https://s.list.am/h/055/66142055.webp",
			price: "$125,000",
			text: "2 սենյականոց բնակարան Միքայել Նալբանդյանի փողոցում, 56 ք.մ., 2 սանհանգույց, բարձր առաստաղներ",
			info: "2 սեն., 56 ք.մ., 2/3 հարկ"
		},
		{
			img: "https://s.list.am/h/298/76779298.webp",
			price: "$155,000",
			text: "3 սենյականոց բնակարան Գյուլբենկյան փողոցում, 67 ք.մ., 2 սանհանգույց, 1/14 հարկ, մասնակի վերանորոգում",
			info: "3 սեն., 67 ք.մ., 1/14 հարկ"
		},
		{
			img: "https://s.list.am/h/601/75198601.webp",
			price: "$94,000",
			text: "1 սենյականոց բնակարան Գյուլբենկյան փողոցում, 30 ք.մ., նախավերջին հարկ",
			info: "1 սեն., 30 ք.մ., 4/5 հարկ"
		},
		{
			img: "https://s.list.am/h/190/74881190.webp",
			price: "$130,000",
			text: "3 սենյականոց բնակարան Գյուլբենկյան փողոցում, 82 ք.մ., մի քանի պատշգամբ, 5/14 հարկ",
			info: "3 սեն., 82 ք.մ., 5/14 հարկ"
		},
		{
			img: "https://s.list.am/h/675/76482675.webp",
			price: "$245,000",
			text: "2 սենյականոց բնակարան Թումանյան փողոցում, 75 ք.մ., բարձր առաստաղներ, 3/5 հարկ, կոսմետիկ վերանորոգում",
			info: "2 սեն., 75 ք.մ., 3/5 հարկ"
		},
		{
			img: "https://s.list.am/h/228/76255228.webp",
			price: "$128,000",
			text: "2 սենյականոց բնակարան Տիգրան Մեծի պողոտայում, 37 ք.մ., բարձր առաստաղներ, կապիտալ վերանորոգված",
			info: "2 սեն., 37 ք.մ., 4/4 հարկ"
		},
		{
			img: "https://s.list.am/h/232/75026232.webp",
			price: "$235,000",
			text: "2 սենյականոց բնակարան Վարդանանց փողոցում, 51 ք.մ., 1/9 հարկ, դիզայներական ոճով վերանորոգված",
			info: "3 սեն., 101 ք.մ., 12/13 հարկ"
		},
		{
			img: "https://s.list.am/h/055/77129055.webp",
			price: "$153,000",
			text: "2 սենյականոց բնակարան նորակառույց շենքում Շիրակի փողոցում, 40 ք.մ., բարձր առաստաղներ, 1/2 հարկ",
			info: "2 սեն., 51 ք.մ., 1/9 հարկ"
		},
		{
			img: "https://s.list.am/h/365/76218365.webp",
			price: "$48,200",
			text: "4 սենյականոց բնակարան նորակառույց շենքում Մոնթե Մելքոնյան փողոցում, 121 ք.մ., 2 սանհանգույց",
			info: "2 սեն., 40 ք.մ., 1/2 հարկ"
		},
		{
			img: "https://s.list.am/h/704/77015704.webp",
			price: "$210,000",
			text: "3 սենյականոց բնակարան նորակառույց շենքում, Komitas Ave, 113 ք.մ., 2 սանհանգույց, մի քանի պատշգամբ",
			info: "4 սեն., 121 ք.մ., 3/16 հարկ"
		},
		{
			img: "https://s.list.am/h/835/77022835.webp",
			price: "$250,000",
			text: "2 սենյականոց բնակարան Ռուբինյանց փողոցում, 32 ք.մ., 2/5 հարկ, կապիտալ վերանորոգված, քարե շենք",
			info: "3 սեն., 113 ք.մ., 4/13 հարկ"
		}
	],
	urgently: [
		{
			img: "https://s.list.am/h/835/77022835.webp",
			price: "$250,000",
			text: "2 սենյականոց բնակարան Ռուբինյանց փողոցում, 32 ք.մ., 2/5 հարկ, կապիտալ վերանորոգված, քարե շենք",
			info: "3 սեն., 113 ք.մ., 4/13 հարկ"
		},
		{
			img: "//s.list.am/h/236/77147236.webp",
			price: "$35,000",
			text: "Kia K5, 1.6 լ, 2023 թ.",
			info: "2023 թ., 2000 մղոն, Բենզին"
		},
		{
			img: "https://s.list.am/h/372/75794372.webp",
			price: "$105,000",
			text: "1 սենյականոց բնակարան նորակառույց շենքում Արգիշտի փողոցում, 36 ք.մ., բարձր առաստաղներ, 11/14 հարկ",
			info: "1 սեն., 36 ք.մ., 11/14 հարկ"
		}
	]
}

export default function Categories() {
	return (
		<div className='w-[100%] flex flex-col justify-center items-center'>
			<div className='w-[100%] pt-[30px] pb-[20px]'>
				<Subcategories data={dataBase.subcategories} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<BusinessPages data={dataBase.businessPages} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<CarService data={dataBase.carService} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<SaleOfApartments data={dataBase.saleOfApartments} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<ApartmentsForRent data={dataBase.apartmentsForRent} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<Urgently data={dataBase.urgently} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<CommercialRealEstateAndOfficeLeasing data={dataBase.apartmentsForRent} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<CarRental data={dataBase.carService} />
			</div>
		</div>
	)
}

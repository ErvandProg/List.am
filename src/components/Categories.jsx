import React from 'react';

import Subcategories from './Subcategories';
import BusinessPages from './BusinessPages';
import CarService from './CarService';

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
		</div>
	)
}

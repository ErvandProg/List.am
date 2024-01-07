import React from 'react';

import Subcategories from './Subcategories';
import BusinessPages from './BusinessPages';

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
	]
}

export default function Categories() {
	return (
		<div className='w-[100%] flex flex-col justify-center items-center'>
			<div className='w-[100%] pt-[30px] pb-[20px]'>
				<Subcategories data={dataBase.subcategories} />
			</div>
			<div className="w-[100%] my-[12px] py-[8px]">
				<BusinessPages data="" />
			</div>
		</div>
	)
}

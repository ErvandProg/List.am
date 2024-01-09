import React from 'react';
import Categories from "./Categories";

export default function Content() {
	return (
		<div className='w-[100%] flex justify-center items-center bg-[#fff] pt-[60px]'>
			<div className="w-[1140px]">
				<div className="grid mt-[20px] gap-x-[8px] [grid-template:auto_auto_auto_auto_auto/auto_auto_auto_auto_auto]">
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/54.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Անշարժ գույք</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="	https://www.list.am/img/c/16.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Տրանսպորտ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/65.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Ծառայություններ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/29.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Աշխատանք</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/4.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Էլեկտրոնիկա</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/26.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Կենցաղային տեխնիկա</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/133.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Տուն և այգի</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/17.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Նորաձևություն եւ ոճ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/27.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Մանկական աշխարհ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/39.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Հոբբի և սպորտ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/84.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Սարքավորումներ և նյութեր</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/37.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Կենդանիներ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/14.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Մթերք և ըմպելիքներ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/15.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Այլ</a>
					</div>
					<div className="flex mr-[50px] my-[6px] items-center">
						<img src="https://www.list.am/img/c/bp.png" alt="IMG" className='w-[18px] h-[18px] mr-[8px] cursor-pointer' />
						<a href="#" className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis block">Բիզնես էջեր</a>
					</div>
				</div>

				<Categories />
			</div>
		</div>
	)
}

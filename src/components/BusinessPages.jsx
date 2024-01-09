import React from 'react'

export default function BusinessPages(props) {
	return (
		<>
			<a href='#' className='text-[20px] font-bold text-[#333] block h-auto mb-[6px] [transition:color_.2s,background-color_.2s] no-underline'>
				Բիզնես էջեր
				<div className='inline-block w-[10px] h-[10px] ml-[6px] mr-[0] my-[0] border-t-2 border-r-2 border-[#c2c2c2] border-r-[2px_solid_#c2c2c2] [transition:all_.2s] rotate-45'></div>
			</a>
			<div className="flex justify-between">
				{props.data.map((page, index) => (
					<a href='#' key={index} className="inline-block w-[110px] mx-[4px] my-[8px] text-center [transition:all_0.2s]">
						<img src={page.img} alt={`Business Page ${index + 1}`} className="w-[110px] h-[110px] mb-[6px] rounded-[16px] [box-shadow:0_0_3px_3px_rgba(200,200,200,0.2)]" />
						<div className='mx-[0] my-[6px] flex justify-center gap-1'>
							<img src="./../../public/star.png" alt="star1" className='w-[10px] h-[10px]' />
							<img src="./../../public/star.png" alt="star2" className='w-[10px] h-[10px]' />
							<img src="./../../public/star.png" alt="star3" className='w-[10px] h-[10px]' />
							<img src="./../../public/star.png" alt="star4" className='w-[10px] h-[10px]' />
							<img src="./../../public/star.png" alt="star5" className='w-[10px] h-[10px]' />
						</div>
					</a>
				))}
			</div>
		</>
	);
}
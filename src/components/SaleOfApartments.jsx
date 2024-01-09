import React from 'react';

export default function SaleOfApartments(props) {
	return (
		<>
			<a href='#' className='text-[20px] font-bold text-[#333] block h-auto mb-[6px] [transition:color_.2s,background-color_.2s]'>
				Բնակարանների վաճառք
				<div className='inline-block w-[10px] h-[10px] ml-[6px] mr-[0] my-[0] border-t-2 border-r-2 border-[#c2c2c2] border-r-[2px_solid_#c2c2c2] [transition:all_.2s] rotate-45'></div>
			</a>
			<div className='flex overflow-hidden flex-wrap justify-between'>
				{props.data.map((apartment, index) => (
					<div key={index} className="relative inline-block w-[174px] mx-[0] my-[8px] text-left align-top cursor-pointer">
						<img src={apartment.img} alt={`Apartment ${index + 1}`} className="w-[174px] h-[165px] rounded-[8px] [transition:all_0.2s] object-cover" />
						<div className="my-[6px]">
							<div className="text-[16px] font-bold text-[#222] mb-[2px]">{apartment.price}</div>
							<div className="text-[15px] text-[#222] leading-[21px] overflow-hidden max-h-[44px] overflow-ellipsis [transition:all_0.2s] text-left">{apartment.text}</div>
							<div className="text-[14px] text-[#666] mt-[4px]">{apartment.info}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

import React from 'react';

export default function Urgently(props) {
	return (
		<>
			<div className='flex overflow-hidden flex-wrap justify-evenly '>
				{props.data.map((apartment, index) => (
					<div key={index} className="relative inline-block w-[280px] mx-[0] my-[8px] text-left align-top cursor-pointer">
						<img src={apartment.img} alt={`Value ${index + 1}`} className="w-[280px] min-w-[280px] h-[225px] rounded-[16px] [transition:all_.2s] object-cover" />
						<div className="my-[6px] text-[17px] ml-[0] mr-[0]">
							<div className="font-bold text-[#000] mb-[4px]">{apartment.price}</div>
							<div className="text-[15px] text-[#222] leading-[21px] overflow-hidden max-h-[44px] overflow-ellipsis [transition:all_0.2s] text-left">{apartment.text}</div>
							<div className="text-[14px] text-[#666] mt-[4px]">{apartment.info}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

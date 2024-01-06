import React from 'react'

export default function Subcategories(props) {
	return (
		<div className="flex overflow-hidden flex-wrap justify-between">
				{(props.data).map((category, index) => (
					<a href='#' key={index} className="w-[130px] h-[130px] rounded-lg text-white" style={{ backgroundColor: category.backgroundColor , color: category.color }}>
						<div className='w-[130px] h-[130px] [background-size:100%_auto] bg-no-repeat bg-[bottom_center] rounded-[8px]' style={{ backgroundImage: `url(${category.img})` }}>
							<div className="overflow-hidden overflow-ellipsis px-[10px] py-[4px] text-[15px] leading-[1.4]">
								{category.text}
							</div>
						</div>
					</a>
				))}
		</div>
	)
}

import React from 'react'

export default function Footer() {
	return (
		<div className='text-[12px] absolute right-[0] bottom-[0] left-[0] flex clear-both content-center w-full h-[50px] border-t-[1px_solid_#f2f2f2] bg-[#fafafa]'>
			<div className="w-[1140px] m-auto flex justify-between">
				<div className="">
					© 2005-2024 List.am
				</div>
				<div className="flex gap-[16px]">
					<a href="#" className="text-[#222] no-underline [transition:color_.2s,background-color_.2s]">Տեղեկանք</a>
					<a href="#" className="text-[#222] no-underline [transition:color_.2s,background-color_.2s]">Հետադարձ կապ</a>
					<a href="#" className="text-[#222] no-underline [transition:color_.2s,background-color_.2s]">Օգտագործման համաձայնագիր</a>
				</div>
			</div>
		</div>
	)
}

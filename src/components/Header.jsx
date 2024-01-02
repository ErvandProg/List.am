import React from 'react';

export default function Header() {
	return (
		<header className='flex justify-center h-[61px] items-center z-50 [box-shadow:0_1px_6px_1px_rgba(0,0,0,0.06)]'>
			<div className=" relative flex items-center w-[1140px] max-w-[1140px] h-[60px] m-auto flex-wrap">
				<div className="">
					<img src="../../public/list-am-logo.png" alt="" className='w-[140px] h-[40px] object-cover mr-[10px]' />
				</div>
				<div className="hover:text-[#368AEE] flex relative cursor-pointer z-40 pl-[8px] pr-[8px] ml-[10px] font-['Noto_Sans_Armenian', 'Open_Sans', arial, sans-serif] text-[#000] leading-normal">
					<div className="flex w-[22px] mr-[7px] cursor-pointer flex-col justify-center items-center gap-1">
						<div className="w-[100%] h-[2px] rounded bg-[#666]"></div>
						<div className="w-[100%] h-[2px] rounded bg-[#666]"></div>
						<div className="w-[100%] h-[2px] rounded bg-[#666]"></div>
					</div>
					<div className="text-[13px]">Բաժիններ</div>
				</div>
				<div className="flex-grow-[3] mr-[10px] ml-[10px]">
					<form action='' method='' className='relative max-w-[600px] z-51'>
						<input type="text" className='text-[15px] relative box-border w-full h-[36px] pl-[36px] pr-[10px] py-[0] border-[none] rounded-[18px] outline-[none] bg-[#f0f0f0]' placeholder='Որոնում' />
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-[8px] left-[10px] w-[22px] h-[22px] p-0 border-[none] text-[#A9A9A9]">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
						</svg>
					</form>
				</div>
				<div className="text-[14px] flex items-center flex-grow justify-end font-bold">
					<a href="" className='text-[14px] font-normal text-[#222] flex items-center pl-[0] pr-[26px] py-[8px]'>Իմ էջը</a>
					<a href="" className='text-[13px] font-normal text-[#fff] inline-block m-0 px-[20px] py-[8px] cursor-pointer no-underline rounded-[20px] bg-[#0c72ea]'>Տեղադրել հայտարարություն</a>
				</div>
				<div className="absolute right-[-80px] flex gap-2">
					<button className='w-[25px] h-[25px] rounded-[100%] border border-black flex justify-center items-center'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[18px] h-[18px]">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
					<button className='w-[25px] h-[25px] rounded-[100%] border border-black flex justify-center items-center'>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 23">
							<path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	)
}
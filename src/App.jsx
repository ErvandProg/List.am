import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export const AddContext = createContext();

const MyProvider = ({ children }) => {
	const [productInfo, setProductInfo] = useState({
		img: '',
		price: '',
		text: '',
		info: '',
		quantity: '',
		category: ''
	});

	const updateProductInfo = (newProductInfo) => {
		setProductInfo((prevProductInfo) => ({
			...prevProductInfo,
			...newProductInfo,
		}));
	};

	const value = {
		productInfo,
		updateProductInfo
	};

	return (
		<AddContext.Provider value={value}>
			{children}
		</AddContext.Provider>
	);
};

export default function App() {
	return (
		<>
			<MyProvider>
				<Header />
				<Content />
				<Footer />
			</MyProvider>
		</>
	);
}

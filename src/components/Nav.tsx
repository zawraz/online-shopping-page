type PropsType = {
	viewCart: boolean
	setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {
	const button = viewCart ? (
		<button onClick={() => setViewCart(false)}>View Products</button>
	) : (
		<button onClick={() => setViewCart(true)}>Hide Products</button>
	)
	const content = <nav className="nav">{button}</nav>

	return content
}

export default Nav

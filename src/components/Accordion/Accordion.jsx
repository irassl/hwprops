import React from 'react'

type AccordionPropsType = {
	titleValue: string
}
function Accordion(props: AccordionPropsType) {
	return <div>
		<AccordionTitle title={props.titleValue} />
		<AccordionBody />
	</div>

}
type AccordionTitilePropsType = {
	titleValue: string
}
function AccordionTitle(props: AccordionTitilePropsType) {
	return <h3>{props.title}</h3>

}
function AccordionBody() {
	return <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
}

export default Accordion;
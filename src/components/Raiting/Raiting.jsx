import React from 'react'

type RatingPropsType = {
	value: number
}

function Rating(props: RatingPropsType) {

	if (props.value === 1) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={false} />
				<Star selected={false} />
				<Star selected={false} />
			</div>
		)
	}
	if (props.value === 2) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={false} />
				<Star selected={false} />
			</div>
		)
	}
	if (props.value === 3) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={false} />
			</div>
		)
	}
	if (props.value === 4) {
		return (
			<div>
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
				<Star selected={true} />
			</div>
		)
	}
	return (
		<div>
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
		</div>
	)

}


type StarPropsType = {
	selected: Boolean
}
function Star(props: StarPropsType) {
	if (props.selected === true) {
		return <span> <b>start</b></span>
	} else {
		return <span> start</span>
	}


}
export default Rating;
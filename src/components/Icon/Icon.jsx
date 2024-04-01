export const Icon = ({width='24px', height='24px', iconName, className=''}) => {
    return <svg width={width} height={height} fill="#fff">  
        <use xlinkHref={`/images/icons.svg#icon-${iconName}`} />
    </svg>
}
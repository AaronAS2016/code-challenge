const bannerStyles  = {
   width:"100%"
}

const Banner = props => (
   <img src={props.src} alt={props.alt} style={bannerStyles} />
)

export default Banner;
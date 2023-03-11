import "../../assets/scss/Button.scss";

export default function Button({type, href, children}) {
    return (
        <a className={`btn ${type}`} href={href || '#'}>
            <svg className="btn-arrow" viewBox="0 0 6 10" width="6" height="10">
                <path d="M0,9.9C1.4,8.3,2.9,5.6,3.4,5C2.9,4.4,1.4,1.7,0,0.1L0.1,0C1.5,1.6,5.8,4.8,6,5 c-0.2,0.2-4.5,3.4-5.9,5L0,9.9z"></path>
            </svg>
            <span>{children}</span>
            <svg className="btn-arrow" viewBox="0 0 6 10" width="6" height="10">
                <path d="M0,9.9C1.4,8.3,2.9,5.6,3.4,5C2.9,4.4,1.4,1.7,0,0.1L0.1,0C1.5,1.6,5.8,4.8,6,5 c-0.2,0.2-4.5,3.4-5.9,5L0,9.9z"></path>
            </svg>
        </a>
    )
}
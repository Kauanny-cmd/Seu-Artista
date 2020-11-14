import './styles.css';

function PageContainer({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default PageContainer;
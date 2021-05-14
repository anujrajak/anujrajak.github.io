const Footer = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className="footer" id="copyright">
                <p>
                    Made with ❤️ in the middle of{" "}
                    <span className="text-error">pandemic</span>
                    <span className="text-gray">
                    {" "}© Copyright {new Date().getFullYear()}
                    </span>
                </p>
            </div>
        </div>
    );
};

export { Footer };

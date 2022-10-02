const IntroWindow = () => {
    return (
        <div className='intro-window'>
            <div className='intro-header'>
                <div className="horizontal-display">
                    <div className='exit window-icon'>
                        <text>x</text>
                    </div>

                    <div className='minimize window-icon'>
                        <text>-</text>
                    </div>

                    <div className='full-screen window-icon'>
                        <text>+</text>
                    </div>

                    <div className='welcome'>
                        <text className='welcome'>Welcome!</text>
                    </div>
                </div>
            </div>
            <div className='heading'>
                <text className='intro-text'>hello, my name is <u>melissa</u>!</text>
                <div className='line-break'/>
                <text className='intro-subheading'>computer science undergraduate at the <br/>national university of singapore</text>
            </div>
        </div>
    )
}

export default IntroWindow;
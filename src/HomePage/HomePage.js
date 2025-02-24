import React from 'react';
function HomePage() {
    return (
        <div className="container center">

            <div className="page-area">
                {/* This is an A11y Change - Background color */}
                <div className="text-box" style={{ backgroundColor: "aqua" }}>
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </div>

                {/* This is an A11y Change - Background color */}
                <div className="text-box" style={{ backgroundColor: "aqua" }}>
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </div>

                {/* This is an A11y Change - Background color */}
                <div className="text-box" style={{ backgroundColor: "cornsilk" }}>
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they live happier lives... since they spend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </div>

                {/* This is an A11y Change - Background color */}
                <div className="text-box" style={{ backgroundColor: "cornsilk" }}>
                    <h1>Free</h1>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </div>

                {/* This is an A11y Change - Background color */}
                <div className="text-box" style={{ backgroundColor: "aqua" }}>
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </div>

                {/* This is an A11y Change - Background color */}
                <div className="text-box" style={{ backgroundColor: "aqua" }}>
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </div>

                {/* D3JS Chart */}
                <div className="text-box">
                    <h1>D3JS</h1>
                    <div id="d3Chart"></div>
                </div>

                {/* Chart.js Canvas */}
                <div className="text-box">
                    <h1>Chart JS</h1>
                    <div>
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

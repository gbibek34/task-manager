import { Switch } from 'antd';
import { useState } from 'react';

const Dashboard = () => {
    const [filter, setFilter] = useState(false)

    const filterHandler = () => {
        setFilter(!filter)
    }
    return (
        <div>
            <div className="header">
                <div className="page-title">
                    Dashboard
                </div>
                <div className="filter-section">
                    Today's Tasks : &nbsp; <Switch onChange={filterHandler} />
                </div>
            </div>
            <div>
                <div className="task-section">
                    {/* Place the filtering logic here */}
                    {filter ?
                        <div>No Tasks</div> :
                        <div className="task-card">
                            <form action="">
                                <input type="checkbox" name="" id="" />
                            </form>
                            <div className="task-details">
                                <div className="task-title">
                                    Take Dog For Stroll
                                </div>
                                <div className="task-desc">
                                    Go to the nearest park for strolling the dog
                                </div>
                                <div className="task-datetime">
                                    20/12/20 9:35 PM
                                </div>
                            </div>
                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Dashboard
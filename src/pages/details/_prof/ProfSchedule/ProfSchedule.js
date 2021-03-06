import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import TabPanel from '../TabPanel'
import { getSemester } from './../../../popups/_utils/UserFunctions'
import ProfScheduleEntry from './ProfScheduleEntry'
import './ProfSchedule.css'

class ProfSchedule extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profSchedule: props.profSchedule,
            currentSem: "Fall 2020",
            futureSem: "Spring 2021",
            currentTab: 0,
            open: true
        }

        this.handleCollapse = this.handleCollapse.bind(this)
        this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange(event, newValue) {
        this.setState({ currentTab: newValue })
    }

    handleCollapse() {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
    }

    componentDidMount(){
        getSemester().then(res => {
			this.setState({currentSem: res['current'], futureSem: res['next']})
		})
    }

    render() {

        let arrowIcon = this.state.open ? 
        <i className="fas fa-angle-up rotate-icon"></i> : <i className="fas fa-angle-down rotate-icon"></i>
        
        const currentSemList = this.state.profSchedule.currentSem !== null ? this.state.profSchedule.currentSem.map(prof => {
            return (
                <ProfScheduleEntry {...prof} />
            )
        }) : null

        const futureSemList = this.state.profSchedule.futureSem !== null ? this.state.profSchedule.futureSem.map(prof => {
            return (
                <ProfScheduleEntry {...prof} />
            )
        }) : null

        let unavailableCourses = (
            <h5 className="none-scheduled">
                The course schedule is not available yet for this semester <br></br><br></br>
            </h5>
        )

        let noCourses = (
            <h5 className="none-scheduled">
                This professor is not scheduled for this semester <br></br><br></br>
            </h5>
        )

        let currentSem = (
            <table className='table table-hover table-responsive schedule-table'>
                <thead>
                    <tr>
                        <th scope="col">Unique #</th>
                        <th scope="col">Course</th>
                        <th scope="col">Enrolled</th>
                        <th scope="col">Time</th>
                        <th scope="col">Days</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSemList}
                </tbody>
            </table>
        )

        let futureSem = (
            <table className='table table-hover table-responsive schedule-table'>
                <thead>
                    <tr>
                        <th scope="col">Unique #</th>
                        <th scope="col">Course</th>
                        <th scope="col">Enrolled</th>
                        <th scope="col">Time</th>
                        <th scope="col">Days</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {futureSemList}
                </tbody>
            </table>
        )

        let result = (
            <div className="semSchedule">
                <AppBar position="static" color="default">
                    <Tabs
                        inkBarStyle={{ backgroundColor: '#68C222', width: '33.3%' }}
                        value={this.state.currentTab}
                        variant="fullWidth"
                        centered
                        name="currentTab"
                        onChange={this.handleTabChange}
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#bf5700'
                            }
                        }}
                    >
                        <Tab className="schedule-tabs" label={this.state.currentSem} aria-controls='tabpanel-0' />
                        <Tab className="schedule-tabs" label={this.state.futureSem} aria-controls='tabpanel-1' />
                    </Tabs>
                </AppBar>

                <div className="semSchedule">
                    <TabPanel index={0} value={this.state.currentTab}>
                        {currentSemList !== null ? (currentSemList.length > 0 ? currentSem : noCourses) : unavailableCourses}
                    </TabPanel>
                </div>

                <div className="semSchedule">
                    <TabPanel index={1} value={this.state.currentTab}>
                        {futureSemList !== null ? (futureSemList.length > 0 ? futureSem : noCourses) : unavailableCourses}
                    </TabPanel>
                </div>
            </div>
        )

        return (
            <div className="profSchedule">
                <div className="course-card">
                    <div className="card-header prof-header" onClick={this.handleCollapse} role="button" data-toggle="collapse" data-target="#profschedule-collapse">
                        <h4 className="details-header"> Professor Schedule {arrowIcon}</h4>
                    </div>
                    <div className="collapse show" id="profschedule-collapse" role="tabpanel">
                        <div className="card-body card-table">
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfSchedule;
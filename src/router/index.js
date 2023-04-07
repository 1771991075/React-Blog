import { Route, Routes } from "react-router-dom";
import element from "./element";
import Author from './Author';

function RouterViews() {
    return (
        <div>
            <Routes>
                {
                    element.map((item, index) => {
                        return (
                            <Route key={index} path={item.path} element={item.Author ? <Author oldComponent={item.element} oldPath={item.path}></Author> : item.element }>
                                {
                                    item.children && item.children.map((two,idx)=>{
                                        return (
                                            <Route key={idx} path={two.path} element={two.Author ? <Author oldComponent={two.element} oldPath={item.path + '/' + two.path}></Author> : two.element }></Route>
                                        )
                                    })
                                }
                            </Route>
                        )
                    })
                }
            </Routes>
        </div>
    )
}

export default RouterViews;
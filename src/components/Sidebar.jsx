import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
    return (
        <div className="border-2 rounded-2xl md:w-1/3">
            <h1 className="text-center font-lexend text-[#282828] font-semibold text-lg my-4">
                Want to cook: {recipeQueue.length}
            </h1>
            <hr className="w-11/12 mx-auto" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeQueue.map((recipe, idx) => (
                            <tr className="hover" key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minutes</td>
                                <td>{recipe.calories} calories</td>
                                <td>
                                    <button
                                        onClick={() => console.log("preparing")}
                                        className="px-4 py-2 bg-[#0BE58A] text-[#150B2B] hover:bg-[#0ACB75] transition-all ease-in rounded-full text-sm font-lexend"
                                    >
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array,
};

export default Sidebar;

{
    const tasks = [
        {
            content: "odrobić lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
                <li class="section__listItem">
                    ${task.content}
                </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    const init = () => {
        render();
    };

    init();
}
function skillsMember() {
    // Add the user's skills to the page
    // Get the user's skills from the server
    $.ajax({
        url: "/api/skills",
        method: "GET"
    }).then(function (skills) {
        // Add the skills to the page
        for (var i = 0; i < skills.length; i++) {
            var skill = skills[i];
            var skillDiv = $("<div>");
            skillDiv.text(skill.skill);
            $("#skills").append(skillDiv);
        }
    });
}
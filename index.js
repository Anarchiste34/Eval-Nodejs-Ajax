
$(document).ready(() => {
    const apiBaseUrl = "http://localhost:1997/";

    function createFeu() {
        const feuName = { name: $("#create-feu").val(), price: $("#prix-feu").val() };
        $.ajax({
            type: "POST",
            url: apiBaseUrl + 'feu',
            data: JSON.stringify(feuName),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }

    function getAllFeu() {
        $.ajax({
            type: "GET",
            url: apiBaseUrl + 'feu',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (result) => {
                console.log(result);
                let html = "";
                result.forEach(obj => {
                    html += " <p> Numéro pokémon: " + obj.id + " Nom pokémon: " + obj.name + " Prix du pokémon: " + obj.prix + "</p>";
                });
                console.log(html);
                $("#result-get-all").html(html);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }
function getFeuById() {
    const id = $("#id-feu").val();
    $.ajax({
        type: "GET",
        url: apiBaseUrl + 'feu/' + id,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: (result) => {
            console.log(result);
            let html = "";
            html += " <p> " + result.id + " " + result.name + " " + result.prix + " </p> ";
            $("#get-one-by-id-feu").html(html);
            
        },
        error: (xhr, status, error) => {
            console.log(xhr);
            console.log(status);
            console.log(error);
            alert("status: " + status + " error: " + error)
        }
    });
}

function updateFeuById() {
    const id = $("#id-feu-update").val();
    const feuName = { name: $("#id-feu-update").val() }

    $.ajax({
        type: "PUT",
        url: apiBaseUrl + 'feu/' + id,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(feuName),
        dataType: 'json',
        success: (result) => {
            console.log(result);
            alert(result.message)
        },
        error: (xhr, status, error) => {
            console.log(xhr);
            console.log(status);
            console.log(error);
            alert("status: " + status + " error: " + error)
        }
    });
}

function deleteFeuById() {
    const id = $("#id-feu-delete").val();
    $.ajax({
        type: "DELETE",
        url: apiBaseUrl + 'feu/' + id,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: (result) => {
            console.log(result);
            alert(result.message)
        },
        error: (xhr, status, error) => {
            console.log(xhr);
            console.log(status);
            console.log(error);
            alert("status: " + status + " error: " + error)
        }
    });
}

// Rajouter un event listener sur un boutton (lire l'évènement)
$("#create-button-feu").click(createFeu);
$("#get-all-button-feu").click(getAllFeu);
$("#get-by-id-button-feu").click(getFeuById);
$("#update-button-feu").click(updateFeuById);
$("#delete-button-feu").click(deleteFeuById);
});

$(document).ready(() => {
    const apiBaseUrl = "http://localhost:1997/";

    function createLegendaire() {
        const feuName = { name: $("#create-legendaire").val(), price: $("#prix-legendaire").val() };
        $.ajax({
            type: "POST",
            url: apiBaseUrl + 'legendaire',
            data: JSON.stringify(legendaireName),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }

    function getAllLegendaire() {
        $.ajax({
            type: "GET",
            url: apiBaseUrl + 'legendaire',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (result) => {
                console.log(result);
                let html = "";
                result.forEach(obj => {
                    html += " <p> Numéro pokémon: " + obj.id + " Nom pokémon: " + obj.name + " Prix du pokémon: " + obj.prix + "</p>";
                });
                console.log(html);
                $("#result-get-all-legendaire").html(html);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }

    function getLegendaireById() {
        const id = $("#id-legendaire").val();
        $.ajax({
            type: "GET",
            url: apiBaseUrl + 'legendaire/' + id,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (result) => {
                console.log(result);
            let html = "";
            html += " <p> " + result.id + " " + result.name + " " + result.prix + " </p> ";
            $("#get-one-by-id-legendaire").html(html);
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }

    function updateLegendaireById() {
        const id = $("#id-legendaire-update").val();
        const legendaireName = { name: $("#id-legendaire-update").val() }

        $.ajax({
            type: "PUT",
            url: apiBaseUrl + 'legendaire/' + id,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(legendaireName),
            dataType: 'json',
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }

    function deleteLegendaireById() {
        const id = $("#id-legendaire-delete").val();
        $.ajax({
            type: "DELETE",
            url: apiBaseUrl + 'legendaire/' + id,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status: " + status + " error: " + error)
            }
        });
    }

    // Rajouter un event listener sur un boutton (lire l'évènement)
    $("#create-button-legendaire").click(createLegendaire);
    $("#get-all-button-legendaire").click(getAllLegendaire);
    $("#get-by-id-button-legendaire").click(getLegendaireById);
    $("#update-button-legendaire").click(updateLegendaireById);
    $("#delete-button-legendaire").click(deleteLegendaireById);
});
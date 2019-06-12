using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Er moet een wachtwoord gekozen worden tussen de 4 en 8 tekens")]
        public string Password { get; set; }
    }
}
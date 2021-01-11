using Microsoft.AspNetCore.Mvc;
using Gifter.Data;
using Gifter.Repositories;
using Gifter.Models;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userRepository;
        public UserProfileController(IUserProfileRepository userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _userRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult Post(UserProfile User)
        {
            _userRepository.Add(User);
            return CreatedAtAction("Get", new { id = User.Id }, User);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _userRepository.Update(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userRepository.Delete(id);
            return NoContent();
        }
    }
}

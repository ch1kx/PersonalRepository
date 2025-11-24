using TodoApp.Services.Dtos;
using TodoApp.Entities;
using Volo.Abp.Domain.Repositories;

namespace TodoApp.Services
{
    public class TodoAppService : TodoAppAppService
    {
        private readonly IRepository<TodoItem, Guid> _todoItemRepository;

        public TodoAppService(IRepository<TodoItem, Guid> todoItemRepository)
        {
            _todoItemRepository = todoItemRepository;
        }

        // TODO: Implement service methods here...

        // Example method to get all TodoItems
        public async Task<List<TodoItemDto>> GetListAsync()
        {
            var items = await _todoItemRepository.GetListAsync();
            return items
                .Select(item => new TodoItemDto
                {
                    Id = item.Id,
                    Text = item.Text
                }).ToList();
        }

        // Example method to create a new TodoItem
        public async Task <TodoItemDto> CreateAsync (string text)
        {
            var todoItem = await _todoItemRepository.InsertAsync(
                new TodoItem { Text = text }
            );

            return new TodoItemDto
            {
                Id = todoItem.Id,
                Text = todoItem.Text
            };
        }

        // Example method to delete a TodoItem
        public async Task DeleteAsync(Guid id)
        {
            await _todoItemRepository.DeleteAsync(id);
        }
    }
}

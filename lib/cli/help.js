/**
 * Help.
 *
 * Example:
 *
 *     $ todo
 *     $ todo --help
 *
 * @api public
 */

module.exports = function() {
  [
    '',
    '  todo: Todos in the CLI like what',
    '',
    '  Usage:',
    '',
    '    todo help[h]                Print help',
    '    todo add[a] Go shopping     Create a new todo item',
    '    todo idea[id] why not ?     Create a new idea item',
    '    todo tag[t] record it       Create a new tag item',
    '    todo ls[l]                  Print all pending todo items',
    '    todo ls @tag                Print todo items containing "@tag"',
    '    todo ls ~@tag               Print todo items not containing "@tag"',
    '    todo ls --all[-a]           Print completed and pending todo items',
    '    todo ls --done[-d]          Print completed todo items',
    '    todo ls --idea[-i]          Print ideas',
    '    todo ls --tag[-t]           Print tags',
    '    todo check 1                Mark #1 as completed',
    '    todo mv 1 42                Change the id of given todo',
    '    todo undo[u] 1              Revert #1 to pending',
    '    todo rm 1                   Remove #1 item',
    '    todo clear                  Destroy all todo&idea items',
    '    todo clear --done           Destroy all completed todo items',
    '    todo renumber               Re-numbers all todos starting with 1',
    '',
    '  Environment variables:',
    '',
    '    TODO_FORMAT=pretty                Specify formatter (simple, pretty, mini) [default: simple]',
    '    TODO_DB_PATH=~/Dropbox/todo.json  Specify DB path [default: ~/.todo-db.json]',
    '',
  ].forEach(function(line) {
    console.log(line);
  });
};

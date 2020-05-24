 <template>
	<table>
		<td v-else>{{ employee.name }}</td>
		<td v-if="editing === employee.id">
			<!-- edit mode version of each input element that displays when edit is selected for that row -->
			<input type="text" v-model="employee.email" />
		</td>
		<td v-else>{{ employee.email }}</td>

		<td v-if="editing === employee.id">
			<div id="button-box">
				<!-- edit mode version of each input element that displays when edit is selected for that row -->
				<button @click="editEmployee(employee)">Save</button>
				<button @click="cancelEdit(employee)" class="muted-button">Cancel</button>
			</div>
		</td>
		<td v-else>
			<div id="button-box">
				<!-- on click, the "editing" state property will be updated with selected emp's id -->
				<button @click="editMode(employee)">Edit</button>

				<!-- emit custom delete event, and send the employee's id as payload to App.vue -->
				<button @click="$emit('delete:employee', employee.id)">Delete</button>
			</div>
		</td>
	</table>
</template>



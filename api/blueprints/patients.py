from flask import Blueprint, request
from flask import jsonify
from api import db
from api.api_utils import json_res, query2jsonable
from api.dao.models import Role, User, UserSchema, RoleSchema

patients_api = Blueprint('patients', __name__)


@patients_api.route('', methods=['GET', 'POST'])
def patients_route():
     if request.method == 'POST':
        User.insert_into(request.get_json(force=True), 'Patient')
        return jsonify({}), 201
     else:
        return jsonify({'patients': User.get_users_by_role('Patient')}), 200


@patients_api.route('/<patient_id>', methods=['GET', 'PUT', 'DELETE'])
def patient_route(patient_id):
    if request.method == 'PUT':
        try: 
            updated = User.update_user(request.get_json(force=True), patient_id, 'Patient')
            if updated:
                return jsonify({}), 200
            return jsonify({'error': 'Not found'}), 404
        except Exception:
            return jsonify({'error': 'Bad request'}), 400
    elif request.method == 'DELETE':
            deleted = User.delete_user(request.get_json(force=True), patient_id, 'Patient')
            if deleted:
                return jsonify({}), 204
            return jsonify({'error': 'Not found'}), 404
    else:
        patient = User.get_users_by_role('Patient', patient_id)
        if patient:
            return jsonify({'patient': patient}), 200
        return jsonify({'error': 'Not found'}), 404